import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";
import fs from "fs";
import path from "path";

// List of translation modules to load (namespace to folder mappings)
const translationModules = [
  { namespace: "Common", folder: "common" },
  { namespace: "HomePage", folder: "home" },
  { namespace: "AboutPage", folder: "about" },
  // Add new namespaces here without changing the loading code
];

/**
 * Dynamically detects available translation modules in a given locale directory
 * This allows us to automatically pick up new translation folders without code changes
 */
async function detectTranslationModules(locale: string) {
  try {
    const localePath = path.join(process.cwd(), "src", "messages", locale);
    const entries = fs.readdirSync(localePath, { withFileTypes: true });

    // Find all directories that have a matching JSON file
    return entries
      .filter((entry) => entry.isDirectory())
      .map((dir) => ({
        namespace:
          dir.name.charAt(0).toUpperCase() + dir.name.slice(1) + "Page",
        folder: dir.name,
      }))
      .filter((module) => {
        // Special case for common
        if (module.folder === "common") {
          module.namespace = "Common";
          return true;
        }

        // Check if the JSON file exists
        const jsonPath = path.join(
          localePath,
          module.folder,
          `${module.folder}.json`
        );
        return fs.existsSync(jsonPath);
      });
  } catch (error) {
    console.warn(
      `Could not auto-detect translation modules for ${locale}:`,
      error
    );
    // Fallback to the predefined list if auto-detection fails
    return translationModules;
  }
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  // Auto-detect available translation modules or use the predefined list
  let modules = translationModules;
  if (process.env.NODE_ENV !== "production") {
    // Only auto-detect in development for better performance in production
    modules = await detectTranslationModules(locale);
  }

  // Load all translation files dynamically
  const messages: Record<string, Record<string, unknown>> = {};

  await Promise.all(
    modules.map(async ({ namespace, folder }) => {
      try {
        // Dynamic import of the translation file
        const translationModule = await import(
          `@/messages/${locale}/${folder}/${folder}.json`
        );
        messages[namespace] = translationModule.default;
      } catch (error) {
        console.warn(
          `Failed to load translation for ${namespace} in ${locale}:`,
          error
        );
        // Set empty object as fallback to prevent errors
        messages[namespace] = {};
      }
    })
  );

  return {
    locale,
    messages,
  };
});

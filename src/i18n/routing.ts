import { defineRouting } from "next-intl/routing";

// Define supported locales
const locales = ["en", "vn"] as const;
type Locale = (typeof locales)[number];

// Type for translations with either locale-specific paths or a default path
type RouteTranslations = {
  [key in Locale]?: string;
} & {
  default?: string;
};

// Define route translation mappings structure
interface RouteConfig {
  path: string;
  translations: RouteTranslations;
}

// This makes it easy to add new routes with their localized paths
const routes: Record<string, RouteConfig> = {
  home: {
    path: "/",
    translations: {
      // Default path is used for all locales unless overridden
      default: "/",
    },
  },
  about: {
    path: "/about",
    translations: {
      en: "/about",
      vn: "/gioi-thieu",
    },
  },
  // Add new routes here following the same pattern
  // Example:
  // contact: {
  //   path: "/contact",
  //   translations: {
  //     en: "/contact",
  //     vn: "/lien-he"
  //   }
  // }
};

// Generate pathnames object for next-intl from our routes definition
const generatePathnames = () => {
  const pathnames: Record<string, string | Record<Locale, string>> = {};

  Object.entries(routes).forEach(([key, route]) => {
    const { path, translations } = route;

    // If we have a default translation that applies to all locales
    if (translations.default) {
      pathnames[path] = translations.default;
    }
    // If we have locale-specific translations
    else {
      const localeSpecificPaths: Record<string, string> = {};

      locales.forEach((locale) => {
        localeSpecificPaths[locale] = translations[locale] || path;
      });

      pathnames[path] = localeSpecificPaths;
    }
  });

  return pathnames;
};

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: "vn",

  // Generated pathnames from our routes configuration
  pathnames: generatePathnames(),
});

// Export routes as constants for use in navigation
export const ROUTES = Object.entries(routes).reduce<Record<string, string>>(
  (acc, [key, value]) => {
    acc[key] = value.path;
    return acc;
  },
  {}
);

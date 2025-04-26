import { NextIntlClientProvider, hasLocale, useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing, ROUTES } from '@/i18n/routing';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/common/mode-toggle';
import { LanguageSwitcher } from '@/components/common/language-switcher';
import { Link } from '@/i18n/navigation';
import '@/styles/globals.css';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <title>Bansa App</title>
        <meta name="description" content="Modern Next.js application with internationalization" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <div className="relative flex min-h-screen flex-col">
              <header className="sticky top-0 z-40 w-full border-b bg-background">
                <div className="container flex h-16 items-center justify-between py-4">
                  <div className="flex items-center gap-2">
                    <Link href={ROUTES.home} className="flex items-center space-x-2">
                      <span className="font-bold text-xl">Bansa</span>
                    </Link>
                    <nav className="hidden md:flex md:items-center md:space-x-4 ml-6">
                      <Link href={ROUTES.about} className="text-sm font-medium transition-colors hover:text-primary">
                        <TranslatedNavItem name="about" />
                      </Link>
                    </nav>
                  </div>
                  <nav className="flex items-center gap-4">
                    <LanguageSwitcher />
                    <ModeToggle />
                  </nav>
                </div>
              </header>
              <main className="flex-1">{children}</main>
              <footer className="border-t py-6 md:py-0">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
                  <p className="text-sm text-muted-foreground">
                    <TranslatedFooter />
                  </p>
                </div>
              </footer>
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

function TranslatedNavItem({ name }: { name: string }) {
  const t = useTranslations('Common.navigation');
  return <>{t(name)}</>;
}

function TranslatedFooter() {
  const t = useTranslations('Common.footer');
  return <>{t('copyright')}</>;
}
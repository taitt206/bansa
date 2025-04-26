'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ROUTES } from '@/i18n/routing';

export function Footer() {
    const t = useTranslations('Common.footer');

    return (
        <footer className="border-t">
            <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 py-6 md:h-16 md:flex-row md:py-0 max-w-6xl">
                <p className="text-sm text-muted-foreground">
                    {t('copyright')}
                </p>

                <div className="flex space-x-4 text-sm text-muted-foreground">
                    <Link href={ROUTES.home} className="hover:underline">
                        {t('privacyPolicy')}
                    </Link>
                    <Link href={ROUTES.home} className="hover:underline">
                        {t('termsOfService')}
                    </Link>
                </div>
            </div>
        </footer>
    );
}
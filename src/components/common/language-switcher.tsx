'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import ReactCountryFlag from 'react-country-flag';

// Mapping between locale codes and country codes for flags
const localeToCountry: Record<string, string> = {
    'en': 'US',
    'vn': 'VN'
};

export function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const t = useTranslations('Common.language');
    const currentLocale = useLocale();
    const currentCountry = localeToCountry[currentLocale] || 'US';

    const switchLanguage = (locale: string) => {
        router.push(pathname, { locale });
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full p-0 overflow-hidden">
                    <div className="rounded-full overflow-hidden w-full h-full flex items-center justify-center">
                        <ReactCountryFlag
                            countryCode={currentCountry}
                            svg
                            style={{
                                width: '1.6rem',
                                height: '1.6rem',
                                objectFit: 'cover',
                                borderRadius: '50%'
                            }}
                            title={currentLocale === 'en' ? "English" : "Tiếng Việt"}
                        />
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem
                    onClick={() => switchLanguage('en')}
                    className="flex items-center gap-2"
                >
                    <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center border">
                        <ReactCountryFlag
                            countryCode="US"
                            svg
                            style={{
                                width: '1.5rem',
                                height: '1.5rem',
                                objectFit: 'cover'
                            }}
                            title="United States"
                        />
                    </div>
                    {t('english')}
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => switchLanguage('vn')}
                    className="flex items-center gap-2"
                >
                    <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center border">
                        <ReactCountryFlag
                            countryCode="VN"
                            svg
                            style={{
                                width: '1.5rem',
                                height: '1.5rem',
                                objectFit: 'cover'
                            }}
                            title="Vietnam"
                        />
                    </div>
                    {t('vietnamese')}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
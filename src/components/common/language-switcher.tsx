'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { GlobeIcon } from 'lucide-react';

export function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const t = useTranslations('Common.language');

    const switchLanguage = (locale: string) => {
        router.push(pathname, { locale });
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label={t('switchLanguage')}>
                    <GlobeIcon className="h-5 w-5" />
                    <span className="sr-only">{t('switchLanguage')}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => switchLanguage('en')}>
                    {t('english')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => switchLanguage('vn')}>
                    {t('vietnamese')}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
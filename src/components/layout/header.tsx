'use client';

import { useTranslations } from 'next-intl';
import { ModeToggle } from '@/components/common/mode-toggle';
import { LanguageSwitcher } from '@/components/common/language-switcher';
import { CustomLogo } from '@/components/common/custom-logo';
import React from 'react';
import { Separator } from '@/components/ui/separator';

export function Header() {
    return (
        <header className="sticky top-0 z-40 w-full bg-background/85 backdrop-blur-sm border-b shadow-sm">
            <div className="container mx-auto px-4 flex h-16 items-center justify-between max-w-6xl relative">
                {/* Left side with logo and subtle animation */}
                <div className="flex items-center relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
                    <div className="relative">
                        <CustomLogo />
                    </div>
                </div>

                {/* Right side with improved styling */}
                <nav className="flex items-center">
                    <div className="flex items-center space-x-1 rounded-full bg-muted/40 p-1">
                        <LanguageSwitcher />
                        <Separator orientation="vertical" className="h-6 mx-1 opacity-50" />
                        <ModeToggle />
                    </div>
                </nav>
            </div>
        </header>
    );
}

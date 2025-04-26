'use client';

import { cn } from '@/lib/utils';
import { Link } from '@/i18n/navigation';
import { ROUTES } from '@/i18n/routing';
import { cva, type VariantProps } from "class-variance-authority";

const logoVariants = cva(
    "font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r transition-all duration-300",
    {
        variants: {
            variant: {
                default: "from-primary to-primary/70",
                purple: "from-purple-500 to-purple-600",
                red: "from-red-500 to-red-800",
                yellow: "from-yellow-500 to-amber-700",
                secondary: "from-secondary to-secondary-foreground",
                pink: "from-pink-400 to-pink-800",
                blue: "from-blue-500 to-indigo-700",
                green: "from-emerald-500 to-green-800",
                orange: "from-orange-400 to-orange-700",
                teal: "from-teal-400 to-cyan-700",
                indigo: "from-indigo-500 to-violet-800",
            },
            size: {
                xs: "text-xs",
                sm: "text-sm",
                base: "text-base",
                lg: "text-lg",
                xl: "text-xl",
                "2xl": "text-2xl",
                "3xl": "text-3xl",
                "4xl": "text-4xl",
                "5xl": "text-5xl",
            },
            animation: {
                none: "",
                pulse: "animate-pulse",
                bounce: "animate-bounce",
            },
            fontWeight: {
                normal: "font-normal",
                medium: "font-medium",
                semibold: "font-semibold",
                bold: "font-bold",
                extrabold: "font-extrabold",
                black: "font-black",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "2xl",
            animation: "none",
            fontWeight: "bold",
        },
    }
);

export interface CustomLogoProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof logoVariants> {
    asChild?: boolean;
}

export function CustomLogo({
    className,
    variant,
    size,
    animation,
    fontWeight,
    asChild = false,
    ...props
}: CustomLogoProps) {
    const content = (
        <div
            className={cn(logoVariants({ variant, size, animation, fontWeight }), className)}
            {...props}
        >
            BANSA
        </div>
    );

    if (!asChild) {
        return (
            <Link href={ROUTES.home} className="flex items-center gap-2">
                {content}
            </Link>
        );
    }

    return content;
}
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";

const logoVariants = cva(
    "font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r transition-all duration-300",
    {
        variants: {
            variant: {
                default: "from-primary to-purple-600",
                purple: "from-purple-500 to-purple-900",
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
                "6xl": "text-6xl",
                "7xl": "text-7xl",
                "8xl": "text-8xl",
                "9xl": "text-9xl",
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
            letterSpacing: {
                tighter: "tracking-tighter",
                tight: "tracking-tight",
                normal: "tracking-normal",
                wide: "tracking-wide",
                wider: "tracking-wider",
                widest: "tracking-widest",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "2xl",
            animation: "none",
            fontWeight: "bold",
            letterSpacing: "tight",
        },
    }
);

export interface LogoProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof logoVariants> {
    asLink?: boolean;
    href?: string;
}

const Logo = ({
    className,
    variant,
    size,
    animation,
    fontWeight,
    letterSpacing,
    asLink = false,
    href = "/",
    ...props
}: LogoProps) => {
    const content = (
        <div
            className={cn(logoVariants({ variant, size, animation, fontWeight, letterSpacing }), className)}
            {...props}
        >
            BANSA
        </div>
    );

    if (asLink) {
        return <Link href={href}>{content}</Link>;
    }

    return content;
};

export { Logo, logoVariants };
export default Logo;
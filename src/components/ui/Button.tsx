import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({
  className,
  variant = "default",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 dark:focus-visible:ring-white/20 disabled:opacity-50 disabled:pointer-events-none",
        {
          "bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200":
            variant === "default",
          "border border-black/10 bg-transparent hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5":
            variant === "outline",
          "bg-transparent hover:bg-black/5 dark:hover:bg-white/5":
            variant === "ghost",
        },
        {
          "h-9 px-4 text-sm": size === "sm",
          "h-11 px-6 text-base": size === "md",
          "h-13 px-8 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    />
  );
}
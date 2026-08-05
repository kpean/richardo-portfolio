"use client";

import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-transparent transition-colors hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 dark:focus-visible:ring-white/20"
      )}
      aria-label="Toggle theme"
      type="button"
    >
      <span
        className={cn(
          "transition-all duration-300",
          theme === "light" ? "opacity-100" : "opacity-0 rotate-90"
        )}
      >
        ☀️
      </span>
      <span
        className={cn(
          "absolute transition-all duration-300",
          theme === "dark" ? "opacity-100" : "opacity-0 -rotate-90"
        )}
      >
        🌙
      </span>
    </button>
  );
}
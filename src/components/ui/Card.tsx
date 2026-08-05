import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950",
        className
      )}
      {...props}
    />
  );
}
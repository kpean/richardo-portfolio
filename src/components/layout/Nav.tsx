import { cn } from "@/lib/utils";

interface NavProps {
  className?: string;
}

export function Nav({ className }: NavProps) {
  return (
    <nav className={cn("flex items-center gap-6 text-sm font-medium", className)}>
      <a
        href="#about"
        className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
      >
        About
      </a>
      <a
        href="#projects"
        className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
      >
        Projects
      </a>
      <a
        href="#contact"
        className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
      >
        Contact
      </a>
    </nav>
  );
}
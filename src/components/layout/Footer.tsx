import { socials } from "@/data/socials";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "border-t border-black/10 bg-white dark:border-white/10 dark:bg-black",
        className
      )}
    >
      <div className="mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Richardo Kevin. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              className="text-xs font-medium text-zinc-500 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
            >
              {social.platform}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
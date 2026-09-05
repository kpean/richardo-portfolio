import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

const footerLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/richardokepin",
  },
  {
    label: "Email",
    href: "mailto:richardokepin@gmail.com",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6281233542309",
  },
];

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "border-t border-black/10 bg-white",
        className
      )}
      aria-label="Site footer"
    >
        <div className="mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm font-medium text-black">
          © 2026 richardokvn
        </p>
        <div className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
               className="text-sm font-medium text-black underline-offset-4 transition-colors duration-200 hover:text-black/60 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

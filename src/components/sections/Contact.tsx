"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface ContactProps {
  className?: string;
}

const contactItems = [
  {
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
  },
  {
    label: "Instagram",
    value: "@richardokevin",
    href: "https://instagram.com/richardokevin",
  },
  {
    label: "WhatsApp",
    value: "+1 234 567 890",
    href: "https://wa.me/1234567890",
  },
];

export function Contact({ className }: ContactProps) {
  return (
    <section id="contact" className={cn("pt-16 md:pt-20 py-20 md:py-32", className)}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Contact
          </h2>

          <ul className="mt-8 flex flex-col gap-4">
            {contactItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="group flex flex-col gap-1 transition-colors hover:text-zinc-600 dark:hover:text-zinc-400"
                >
                  <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    {item.label}
                  </span>
                  <span className="text-base text-zinc-900 dark:text-zinc-100">
                    {item.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <a
              href="/cv.pdf"
              download
              className={cn(
                "inline-flex h-11 items-center justify-center rounded-full border border-black/20 bg-transparent px-8 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-black"
              )}
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
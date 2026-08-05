"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface ContactProps {
  className?: string;
}

const contactItems = [
  {
    label: "Instagram",
    value: "@richardokepin",
    href: "https://instagram.com/richardokepin",
    external: true,
  },
  {
    label: "Email",
    value: "richardokepin@gmail.com",
    href: "mailto:richardokepin@gmail.com",
    external: false,
  },
  {
    label: "WhatsApp",
    value: "+62 812-3354-2309",
    href: "https://wa.me/6281233542309",
    external: true,
  },
];

export const Contact = React.memo(({ className }: ContactProps) => {
  return (
    <section id="contact" className={cn("py-24 md:py-32", className)}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
            Contact
          </h2>

          <ul className="mt-12 space-y-0">
            {contactItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-label={`${item.label}: ${item.value}`}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex flex-col gap-2 border-t border-black/10 py-5 [transition:color_0.2s_ease-out,_border-color_0.2s_ease-out] hover:border-black hover:text-black/80 dark:border-white/10 dark:hover:border-white dark:hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 dark:focus-visible:ring-white"
                >
                  <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    {item.label}
                  </span>
                  <span className="text-2xl font-light text-black dark:text-white sm:text-3xl sm:tracking-tight">
                    {item.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </section>
  );
});

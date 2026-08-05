"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/70 dark:bg-black/70 backdrop-blur-lg shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-6xl">
          <a
            href="/"
            className="font-semibold tracking-tight text-lg transition-colors hover:text-zinc-600 dark:hover:text-zinc-400"
          >
            Richardo Kevin
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#work"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
            >
              Work
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
            >
              Contact
            </a>
            <ThemeToggle />
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative flex h-10 w-10 items-center justify-center md:hidden"
            aria-label="Toggle menu"
            type="button"
          >
            <span className="absolute h-0.5 w-5 bg-zinc-900 dark:bg-zinc-100 transition-all duration-300"
              style={{
                transform: mobileOpen ? "rotate(45deg) translate(0px, 0px)" : "rotate(0deg) translate(0px, -4px)",
              }}
            />
            <span className="absolute h-0.5 w-5 bg-zinc-900 dark:bg-zinc-100 transition-all duration-300"
              style={{
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span className="absolute h-0.5 w-5 bg-zinc-900 dark:bg-zinc-100 transition-all duration-300"
              style={{
                transform: mobileOpen ? "rotate(-45deg) translate(0px, 0px)" : "rotate(0deg) translate(0px, 4px)",
              }}
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed right-0 top-0 h-full w-72 bg-white dark:bg-zinc-950 shadow-xl"
            >
              <div className="flex flex-col items-center gap-6 pt-20">
                <a
                  href="#work"
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-zinc-800 hover:text-black dark:text-zinc-200 dark:hover:text-white"
                >
                  Work
                </a>
                <a
                  href="#about"
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-zinc-800 hover:text-black dark:text-zinc-200 dark:hover:text-white"
                >
                  About
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-zinc-800 hover:text-black dark:text-zinc-200 dark:hover:text-white"
                >
                  Contact
                </a>
                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
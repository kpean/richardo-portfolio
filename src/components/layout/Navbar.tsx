"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const projectFilters = ["All", "Commercial", "YouTube", "Shorts", "Wedding"];

interface NavbarProps {
  activeCategory?: string;
  setActiveCategory?: (category: string) => void;
}

export function Navbar({
  activeCategory = "All",
  setActiveCategory = () => {},
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";

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

  const linkClasses =
    "text-sm font-medium text-zinc-600 transition-colors duration-200 ease-out hover:text-black dark:text-zinc-400 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 dark:focus-visible:ring-white";

  const brandClasses =
    "font-semibold tracking-tight text-xl text-zinc-900 transition-colors duration-200 ease-out hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 dark:focus-visible:ring-white";

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setDropdownOpen(false);
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "sticky top-0 z-50 h-[110px] bg-black"
        )}
        aria-label="Main navigation"
      >
        <div className="mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="flex w-full items-center justify-end">
            <ThemeToggle />
          </div>

          <a href="/" className={brandClasses}>
            richardokvn
          </a>

          {!isAboutPage && (
            <div className="flex items-center gap-8">
              <a href="#work" className={linkClasses}>
                HOME
              </a>

            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={dropdownOpen}
                onClick={() => setDropdownOpen((open) => !open)}
                className={cn(linkClasses, "flex items-center gap-1")}
              >
                <span>PROJECTS</span>
                <span aria-hidden="true">▼</span>
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    role="menu"
                    aria-orientation="vertical"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[170px] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black"
                  >
                    <ul className="flex flex-col py-1">
                      {projectFilters.map((filter) => (
                        <li key={filter} role="none">
                          <button
                            onClick={() => handleCategoryClick(filter)}
                            role="menuitem"
                            className={cn(
                              "w-full text-left px-4 py-1 text-sm transition-colors duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 dark:focus-visible:ring-white",
                              activeCategory === filter
                                ? "font-bold text-black underline decoration-1 underline-offset-1 dark:text-white dark:decoration-white"
                                : "text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
                            )}
                          >
                            {filter}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="/about" className={linkClasses}>
              ABOUT
            </a>
            <a href="#contact" className={linkClasses}>
              CONTACT
            </a>
          </div>
          )}
        </div>
      </motion.nav>

      {!isAboutPage && (
        <AnimatePresence>
          {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/20 md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed right-0 top-0 h-full w-72 bg-white dark:bg-zinc-950"
            >
              <div className="flex h-[120px] items-center justify-between px-4 sm:px-6">
                <a href="/" className={brandClasses}>
                  richardokvn
                </a>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="relative flex h-10 w-10 items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 dark:focus-visible:ring-white"
                  aria-label="Close menu"
                  type="button"
                >
                  <span
                    className="absolute h-0.5 w-5 rotate-45 bg-zinc-900 dark:bg-zinc-100"
                    style={{ opacity: mobileOpen ? 1 : 0 }}
                  />
                  <span
                    className="absolute h-0.5 w-5 -rotate-45 bg-zinc-900 dark:bg-zinc-100"
                    style={{ opacity: mobileOpen ? 1 : 0 }}
                  />
                </button>
              </div>
              <div className="flex flex-col items-center gap-5 pt-10">
                <a
                  href="#work"
                  onClick={() => setMobileOpen(false)}
                  className={linkClasses}
                >
                  HOME
                </a>
                <a
                  href="#projects"
                  onClick={() => setMobileOpen(false)}
                  className={linkClasses}
                >
                  PROJECTS
                </a>
                <a
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className={linkClasses}
                >
                  ABOUT
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className={linkClasses}
                >
                  CONTACT
                </a>
                <div className="pt-4">
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      )}
    </>
  );
}
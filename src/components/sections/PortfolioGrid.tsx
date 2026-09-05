"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { useCategoryFilter } from "@/components/CategoryFilterProvider";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

interface PortfolioGridProps {
  className?: string;
}

const ProjectCard = React.memo(
  motion(({ project }: { project: (typeof projects)[number] }) => {
    const [imgError, setImgError] = useState(false);
    const [imgState, setImgState] = useState<"maxres" | "hq" | "fallback">(
      "maxres"
    );

    const thumbnailSrc = (() => {
      if (project.youtubeId) {
        if (imgState === "maxres") {
          return `https://i.ytimg.com/vi/${project.youtubeId}/maxresdefault.jpg`;
        }
        if (imgState === "hq") {
          return `https://i.ytimg.com/vi/${project.youtubeId}/hqdefault.jpg`;
        }
      }
      return project.thumbnail;
    })();

    const handleError = () => {
      if (project.youtubeId && imgState === "maxres") {
        setImgState("hq");
      } else {
        setImgState("fallback");
      }
    };

    return (
      <Link href={`/work/${project.slug}`} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-900 transition-transform duration-[350ms] ease-out group-hover:scale-[1.03]">
          {imgState === "fallback" ? (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
              <span className="text-sm font-medium text-zinc-500">
                Coming Soon
              </span>
            </div>
          ) : (
            <Image
              src={thumbnailSrc}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover grayscale transition-all duration-[350ms] ease-out group-hover:grayscale-0"
              onError={handleError}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <p className="text-xs font-medium uppercase tracking-widest text-white/70">
              {project.client}
            </p>
            <h3 className="mt-1 text-sm font-medium text-white">
              {project.title}
            </h3>
            <p className="mt-1 text-xs text-white/60">
              {project.category}
              {project.year && (
                <>
                  <span aria-hidden="true" className="mx-1">
                    ·
                  </span>
                  <span>{project.year}</span>
                </>
              )}
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-base font-medium tracking-tight text-black transition-transform duration-300 ease-out group-hover:-translate-y-[4px] dark:text-white">
              {project.title}
            </h3>
            <p className="mt-1 text-xs font-medium uppercase tracking-widest text-zinc-500 transition-transform duration-300 ease-out group-hover:-translate-y-[4px]">
              {project.category}
              {project.year && (
                <>
                  <span aria-hidden="true" className="mx-2">
                    /
                  </span>
                  <span>{project.year}</span>
                </>
              )}
            </p>
          </div>
        </div>
      </Link>
    );
  })
);

ProjectCard.displayName = "ProjectCard";

export function PortfolioGrid({ className }: PortfolioGridProps) {
  const { activeCategory } = useCategoryFilter();
  const filteredProjects = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory]
  );

  return (
    <section
      className={cn(
        "mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16",
        className
      )}
    >
      <motion.div
        layout
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3"
        aria-live="polite"
      >
        {filteredProjects.map((project) => (
          <motion.div layout key={project.id} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}


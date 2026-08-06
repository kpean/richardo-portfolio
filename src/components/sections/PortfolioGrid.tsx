"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

interface PortfolioGridProps {
  className?: string;
  activeCategory?: string;
}

const ProjectCard = React.memo(
  motion(({ project }: { project: (typeof projects)[number] }) => {
    const [imageState, setImageState] = useState<
      "maxres" | "hq" | "fallback"
    >("maxres");

    const thumbnailSrc = (() => {
      if (project.youtubeId) {
        if (imageState === "maxres") {
          return `https://i.ytimg.com/vi/${project.youtubeId}/maxresdefault.jpg`;
        }
        if (imageState === "hq") {
          return `https://i.ytimg.com/vi/${project.youtubeId}/hqdefault.jpg`;
        }
      }
      return project.thumbnail;
    })();

    const handleError = () => {
      if (imageState === "maxres" && project.youtubeId) {
        setImageState("hq");
      } else {
        setImageState("fallback");
      }
    };

    return (
      <Link href={`/work/${project.slug}`}>
        <div className="group relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-900">
          {imageState === "fallback" ? (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
              <span className="text-sm font-medium text-zinc-500">
                Coming Soon
              </span>
            </div>
          ) : (
            <Image
              src={thumbnailSrc}
              alt={`${project.title} - ${project.category} project thumbnail`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover grayscale [transition:transform_0.4s_ease-out,_filter_0.4s_ease-out] group-hover:scale-[1.04] group-hover:grayscale-0"
              onError={handleError}
            />
          )}
          <div className="absolute inset-0 bg-black/0 [transition:background-color_0.4s_ease-out] group-hover:bg-black/30" />
          <div className="absolute inset-0 flex flex-col items-start justify-end p-5 opacity-0 translate-y-2 [transition:opacity_0.4s_ease-out,_transform_0.4s_ease-out] group-hover:opacity-100 group-hover:translate-y-0">
            <span className="text-base font-medium text-white">
              {project.title}
            </span>
            <span className="mt-1 text-xs font-light uppercase tracking-wider text-white/80">
              {project.category}
            </span>
          </div>
        </div>
      </Link>
    );
  })
);

ProjectCard.displayName = "ProjectCard";

export function PortfolioGrid({
  className,
  activeCategory = "All",
}: PortfolioGridProps) {
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
        "mx-auto max-w-[1400px] px-6 pt-28 sm:px-10 lg:px-16",
        className
      )}
    >
      <motion.div
        layout
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-14"
        aria-live="polite"
      >
        {filteredProjects.map((project) => (
          <motion.div layout key={project.id} variants={cardVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

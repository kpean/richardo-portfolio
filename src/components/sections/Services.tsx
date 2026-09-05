"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const services = [
  {
    name: "Video Editing",
    description: "Cinematic editing with precise pacing and seamless transitions.",
  },
  {
    name: "Color Grading",
    description: "Professional color correction and stylized grading for every project.",
  },
  {
    name: "Motion Design",
    description: "Dynamic motion graphics and visual effects to elevate your content.",
  },
  {
    name: "Sound Design",
    description: "Audio editing, sound mixing, and soundtrack curation.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

interface ServicesProps {
  className?: string;
}

export function Services({ className }: ServicesProps) {
  return (
    <section id="services" className={cn("py-16 md:py-20", className)}>
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Services
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={cardVariants}
              className="rounded-xl border border-black/10 bg-white p-6 transition-transform hover:-translate-y-1"
            >
              <h3 className="text-base font-semibold">{service.name}</h3>
              <p className="mt-2 text-sm text-zinc-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
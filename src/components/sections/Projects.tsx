import { Container } from "@/components/ui/Container";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { cn } from "@/lib/utils";

interface ProjectsProps {
  className?: string;
}

export function Projects({ className }: ProjectsProps) {
  return (
    <section id="projects" className={cn("pt-16 md:pt-20 py-20 md:py-32", className)}>
      <Container>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Projects
        </h2>
        <div className="mt-12">
          <PortfolioGrid />
        </div>
      </Container>
    </section>
  );
}
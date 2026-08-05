import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col">
      <div className="relative aspect-video bg-zinc-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
              <svg
                className="h-8 w-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="text-sm text-zinc-400">{project.duration}</span>
          </div>
        </div>
      </div>

      <Container>
        <div className="mx-auto max-w-3xl py-12 md:py-20">
          <p className="text-sm font-medium tracking-widest text-zinc-500 uppercase">
            {project.category}
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-black/10 pt-8 dark:border-white/10 sm:grid-cols-4">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Role
              </dt>
              <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-100">
                {project.role}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Software
              </dt>
              <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-100">
                {project.software.join(", ")}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Duration
              </dt>
              <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-100">
                {project.duration}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Client
              </dt>
              <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-100">
                {project.client}
              </dd>
            </div>
          </dl>

          <div className="mt-10 flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className={cn(
                  "inline-flex h-11 items-center justify-center rounded-full bg-black px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                )}
              >
                View Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className={cn(
                  "inline-flex h-11 items-center justify-center rounded-full border border-black/20 bg-transparent px-8 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-black"
                )}
              >
                Source
              </a>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}
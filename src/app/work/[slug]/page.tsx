import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
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

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      images: [
        {
          url: project.thumbnail,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.thumbnail],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const relatedProjects = projects.filter((p) => p.category === project?.category && p.slug !== slug).slice(0, 3);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col">
      <div className="relative w-full bg-black">
        <div className="relative aspect-video w-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
                <svg
                  className="h-10 w-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-base text-zinc-400">{project.duration}</span>
            </div>
          </div>
        </div>
      </div>

      <Container>
        <div className="mx-auto max-w-[900px] py-16 md:py-24">
          <Link
            href="/#projects"
            className="inline-flex items-center text-sm font-medium text-zinc-500 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white mb-12"
          >
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>

          <p className="text-sm font-medium tracking-widest text-zinc-500 uppercase">
            {project.category}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-black dark:text-white sm:text-5xl md:text-6xl">
            {project.title}
          </h1>

          <div className="mt-12 space-y-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Client
                </p>
                <p className="mt-2 text-base text-zinc-900 dark:text-zinc-100">
                  {project.client}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  My Role
                </p>
                <p className="mt-2 text-base text-zinc-900 dark:text-zinc-100">
                  {project.role}
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Software Used
              </p>
              <p className="mt-2 text-base text-zinc-900 dark:text-zinc-100">
                {project.software.join(", ")}
              </p>
            </div>

            <div className="border-t border-black/10 pt-8 dark:border-white/10">
              <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
            </div>
          </div>

          {relatedProjects.length > 0 && (
            <div className="mt-20 md:mt-32">
              <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-white">
                Related Projects
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    href={`/work/${relatedProject.slug}`}
                    className="group"
                  >
                    <div className="group relative aspect-[4/5] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-light text-zinc-300 dark:text-zinc-700">
                          {relatedProject.title.charAt(0)}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                    </div>
                    <div className="mt-4">
                      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        {relatedProject.title}
                      </p>
                      <p className="mt-1 text-xs text-zinc-500">
                        {relatedProject.category}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </main>
  );
}

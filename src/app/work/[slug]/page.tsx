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
      <div className="relative w-full bg-black pt-8">
        <div
          className={cn(
            "relative mx-auto w-full overflow-hidden rounded-lg bg-black",
            project.vertical
              ? "max-w-[420px] aspect-[9/16]"
              : "aspect-video"
          )}
        >
          <iframe
            src={`https://www.youtube.com/embed/${project.youtubeId}`}
            title={project.title}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      <Container>
        <div className="mx-auto max-w-[900px] py-16 md:py-24">
          <Link
            href="/#projects"
            className="inline-flex items-center text-xs font-medium uppercase tracking-widest text-zinc-500 transition-colors hover:text-black mb-12"
          >
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>

          <div className="border-t border-black/10 pt-8">
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
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
            <h1 className="mt-4 text-4xl font-normal tracking-tight text-black sm:text-5xl md:text-6xl">
              {project.title}
            </h1>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                Client
              </p>
              <p className="mt-3 text-base text-zinc-900">
                {project.client}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                My Role
              </p>
              <p className="mt-3 text-base text-zinc-900">
                {project.role}
              </p>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              Software Used
            </p>
            <p className="mt-3 text-base text-zinc-900">
              {project.software.join(", ")}
            </p>
          </div>

          <div className="border-t border-black/10 mt-12 pt-10">
            <p className="text-lg leading-relaxed text-zinc-600">
              {project.description}
            </p>
          </div>

          {relatedProjects.length > 0 && (
            <div className="mt-24 md:mt-32">
              <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                Related Projects
              </h2>
              <div className="mt-8 divide-y divide-black/10">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    href={`/work/${relatedProject.slug}`}
                    className="group block py-6"
                  >
                    <div className="flex items-center justify-between gap-6">
                      <div className="flex-1 min-w-0">
                        <p className="text-xl font-normal tracking-tight text-black transition-colors duration-200 group-hover:text-zinc-500">
                          {relatedProject.title}
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-widest text-zinc-500">
                          {relatedProject.category}
                        </p>
                      </div>
                      <span className="text-sm text-zinc-400 transition-colors duration-200 group-hover:text-black">
                        →
                      </span>
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

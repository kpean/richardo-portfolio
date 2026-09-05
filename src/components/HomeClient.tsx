import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { projects } from "@/data/projects";

export default function HomeClient() {
  return (
    <>
      <div className="mx-auto max-w-[1400px] px-6 pt-28 sm:px-10 lg:px-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              Portfolio
            </p>
            <h1 className="mt-4 text-5xl font-normal tracking-tight text-black md:text-6xl lg:text-7xl leading-[0.95]">
              SELECTED<br />
              WORK
            </h1>
          </div>
          <div className="hidden md:block pb-1">
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              Index
            </p>
            <p className="mt-1 text-xs text-zinc-500">
              {projects.length} Projects
            </p>
          </div>
        </div>
        <div className="mt-8 h-px w-full bg-black/10" />
      </div>
      <PortfolioGrid />
    </>
  );
}

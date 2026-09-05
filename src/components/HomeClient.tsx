import { PortfolioGrid } from "@/components/sections/PortfolioGrid";

export default function HomeClient() {
  return (
    <>
      <div className="mx-auto max-w-[1400px] px-6 pt-28 sm:px-10 lg:px-16">
        <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
          Portfolio
        </p>
        <h1 className="mt-3 text-3xl font-normal tracking-tight text-black md:text-4xl dark:text-white">
          Selected Work
        </h1>
      </div>
      <PortfolioGrid />
    </>
  );
}

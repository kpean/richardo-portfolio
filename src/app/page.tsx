import { Hero } from "@/components/sections/Hero";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <PortfolioGrid />
    </div>
  );
}
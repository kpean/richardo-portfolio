"use client";

import { useState } from "react";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";

export default function HomeClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <>
      <PortfolioGrid activeCategory={activeCategory} />
    </>
  );
}

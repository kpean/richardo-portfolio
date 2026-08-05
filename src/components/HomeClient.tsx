"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";

export default function HomeClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <>
      <Navbar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <PortfolioGrid activeCategory={activeCategory} />
    </>
  );
}

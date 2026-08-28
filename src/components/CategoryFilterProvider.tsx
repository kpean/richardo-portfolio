"use client";

import { createContext, useContext, useState } from "react";

interface CategoryFilterValue {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryFilterContext = createContext<CategoryFilterValue>({
  activeCategory: "All",
  setActiveCategory: () => {},
});

export function CategoryFilterProvider({ children }: { children: React.ReactNode }) {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <CategoryFilterContext.Provider value={{ activeCategory, setActiveCategory }}>
      {children}
    </CategoryFilterContext.Provider>
  );
}

export function useCategoryFilter() {
  return useContext(CategoryFilterContext);
}

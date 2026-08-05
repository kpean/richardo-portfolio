import { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Selected work by Richardo Kevin - video editor specializing in commercial, YouTube, and wedding video projects.",
};

export default function Home() {
  return <HomeClient />;
}

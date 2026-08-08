import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Richardo Kevin",
  description: "Video editor based in Bali creating cinematic stories for brands, businesses, and creators.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-32 md:pt-32 md:pb-48 lg:px-8">
        <a href="/" className="inline-block text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors duration-200 ease-out">
          richardokvn
        </a>

        <div className="mt-8 md:mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div className="max-w-[520px]">
            <div className="mt-10 space-y-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-[15px] sm:leading-normal">
              <p>
                Richardo Kevin is a video editor and visual storyteller based in Bali, working across weddings, lifestyle, commercial, and YouTube content. Through a blend of cinematic editing and visual storytelling, he creates films that feel honest, immersive, and intentional. His work is driven by pacing, emotion, composition, color, and sound, with a focus on the small details that make each story feel personal.
              </p>
              <p>
                His editing workflow spans DaVinci Resolve, Adobe Premiere Pro, Final Cut Pro, and CapCut, allowing him to adapt his approach to different types of projects, formats, and creative needs. From cinematic wedding films and lifestyle stories to commercial and YouTube content, he focuses on finding the rhythm, emotion, and atmosphere that hold each story together.
              </p>
              <p>
                Born and based in Indonesia, his work continues to explore different environments, people, and ways of telling a story. Whether working with creators, brands, or couples, he approaches each project with a filmmaker&apos;s eye and a strong attention to detail.
              </p>
            </div>

            <p className="mt-10 text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Always open to new collaborations, conversations, and creative projects.
            </p>

            <p className="mt-6 text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Get in touch
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Available worldwide.
            </p>
          </div>

          <div className="flex items-center justify-center md:justify-end">
            <div className="relative w-full max-w-md aspect-[3/4]">
              <Image
                src="/images/profile.png"
                alt="Portrait of Richardo Kevin"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

const software = [
  "Premiere Pro",
  "DaVinci Resolve",
  "After Effects",
  "Photoshop",
  "Final Cut Pro",
  "CapCut",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-32 md:pt-32 md:pb-48 lg:px-8">
        <a
          href="/"
          className="inline-block text-lg font-semibold tracking-tight text-zinc-900 transition-colors duration-200 hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400"
        >
          richardokvn
        </a>

        <div className="mt-16 md:mt-24">
          <h1 className="text-4xl font-normal tracking-tight text-black md:text-6xl lg:text-7xl dark:text-white leading-[1.1]">
            Video editor &amp; visual storyteller based in Bali.
          </h1>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <div className="space-y-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg md:leading-relaxed">
              <p>
                Richardo Kevin is a video editor and visual storyteller based in
                Bali, working across weddings, lifestyle, commercial, and YouTube
                content. Through a blend of cinematic editing and visual
                storytelling, he creates films that feel honest, immersive, and
                intentional. His work is driven by pacing, emotion, composition,
                color, and sound, with a focus on the small details that make
                each story feel personal.
              </p>
              <p>
                His editing workflow spans DaVinci Resolve, Adobe Premiere Pro,
                Final Cut Pro, and CapCut, allowing him to adapt his approach to
                different types of projects, formats, and creative needs. From
                cinematic wedding films and lifestyle stories to commercial and
                YouTube content, he focuses on finding the rhythm, emotion, and
                atmosphere that hold each story together.
              </p>
              <p>
                Born and based in Indonesia, his work continues to explore
                different environments, people, and ways of telling a story.
                Whether working with creators, brands, or couples, he approaches
                each project with a filmmaker&apos;s eye and a strong attention
                to detail.
              </p>
            </div>

            <div className="mt-12 md:mt-16 space-y-3">
              <p className="text-sm font-medium text-black dark:text-white">
                Always open to new collaborations, conversations, and creative
                projects.
              </p>
              <p className="text-sm font-medium text-black dark:text-white">
                Get in touch
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Available worldwide.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9 flex items-end">
            <div className="relative w-full max-w-sm aspect-[3/4]">
              <Image
                src="/images/profile.png"
                alt="Portrait of Richardo Kevin"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-24 md:mt-32">
          <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Software
          </h2>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            {software.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

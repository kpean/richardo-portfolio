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
     <div className="min-h-screen bg-[#F7F7F5]">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-32 md:pt-32 md:pb-48 lg:px-8">
        <a
          href="/"
           className="inline-block text-lg font-semibold tracking-tight text-zinc-900 transition-colors duration-200 hover:text-zinc-600"
        >
          richardokvn
        </a>

        <div className="mt-12 md:mt-16">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            About
            <span aria-hidden="true"> / </span>
            <span>01</span>
          </p>
        </div>

        <div className="mt-8 md:mt-10">
          <h1 className="text-5xl font-normal tracking-tight text-black md:text-7xl lg:text-8xl leading-[0.95]">
            Video editor
            <br />
            &amp; visual
            <br />
            storyteller
          </h1>
          <p className="mt-6 md:mt-8 text-base text-zinc-500">
            Based in Bali — working with brands, creators, and couples.
          </p>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <div className="space-y-6 text-base leading-relaxed text-zinc-600 md:text-lg md:leading-relaxed">
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
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                Available for
              </p>
              <p className="text-sm font-medium text-black">
                New collaborations, creative projects, and conversations.
              </p>
              <a
                href="mailto:richardokepin@gmail.com"
                className="text-sm text-black underline underline-offset-4 transition-colors duration-200 hover:text-zinc-600"
              >
                Get in touch
              </a>
              <p className="text-sm text-zinc-500">
                Available worldwide.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9 flex items-start">
            <div className="group relative w-full max-w-sm aspect-[3/4] transition-transform duration-[350ms] ease-out hover:scale-[1.02]">
              <Image
                src="/images/profile.png"
                alt="Portrait of Richardo Kevin"
                fill
                className="object-cover grayscale"
              />
            </div>
          </div>
        </div>

        <div className="mt-24 md:mt-32 border-t border-black/10 pt-10">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Software
          </p>
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-2 text-sm text-zinc-700 md:grid-cols-2">
            {software.map((tool, idx) => (
              <p key={tool} className="flex items-center gap-3">
                <span className="text-xs text-zinc-400">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span>{tool}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

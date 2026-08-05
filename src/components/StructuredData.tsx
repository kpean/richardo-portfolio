import { siteMetadata } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteMetadata.name,
  jobTitle: "Video Editor",
  description: siteMetadata.description,
  url: siteMetadata.url,
  sameAs: [
    siteMetadata.socials.instagram,
    siteMetadata.socials.email,
    siteMetadata.socials.whatsapp,
  ],
  knowsAbout: ["Video Editing", "Motion Graphics", "Color Grading", "Cinematic Storytelling", "Premiere Pro", "DaVinci Resolve", "After Effects"],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

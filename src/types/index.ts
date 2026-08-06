export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  year: string;
  location: string;
  duration: string;
  role: string;
  software: string[];
  client: string;
  youtubeId: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}
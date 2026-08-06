export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  youtubeId?: string;
  category: string;
  year?: string;
  location?: string;
  duration: string;
  role: string;
  software: string[];
  client: string;
  tags: string[];
  challenge?: string;
  result?: string;
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
}
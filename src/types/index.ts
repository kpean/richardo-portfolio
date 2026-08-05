export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  duration: string;
  role: string;
  software: string[];
  client: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}
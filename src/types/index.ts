export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  avatar?: string;
  location?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail?: string;
  category: string;
  duration: string;
  role: string;
  software: string[];
  client: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  projects: Project[];
  skills: Skill[];
  socials: SocialLink[];
}
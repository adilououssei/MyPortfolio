export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  link?: string;
  github?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'mail';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
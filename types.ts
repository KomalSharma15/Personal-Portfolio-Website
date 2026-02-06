
export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;
  image: string;
  isClientProject?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  grade?: string;
}

export interface PortfolioData {
  name: string;
  tagline: string;
  summary: string;
  email: string;
  socials: {
    gmail: string;
    linkedin: string;
    github: string;
  };
  experiences: Experience[];
  projects: Project[];
  skills: SkillCategory[];
  education: Education[];
}

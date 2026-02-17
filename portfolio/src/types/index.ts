export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'web' | 'electrical' | 'industrial' | 'other';
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
  problem: string;
  solution: string;
  outcome: string;
  lessonsLearned: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: number;
  gpa?: string;
  highlights?: string[];
};

export type ExperienceItem = {
  company: string;
  position: string;
  type: 'internship' | 'part-time' | 'freelance' | 'full-time';
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
};

export type Skill = {
  name: string;
  category: 'engineering' | 'software' | 'design' | 'other';
  icon: string;
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
};

export type SocialLink = {
  platform: string;
  url: string;
  icon: string;
};

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  role: string;
  tagline: string;
  email: string;
  location: string;
  bio: string;
  resume: string;
  socials: SocialLink[];
  education: EducationItem[];
  experience: ExperienceItem[];
  skills: Skill[];
  projects: Project[];
};

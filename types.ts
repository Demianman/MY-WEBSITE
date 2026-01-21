
export interface Education {
  school: string;
  location: string;
  degree: string;
  period: string;
  highlights?: string[];
}

export interface Experience {
  company: string;
  title: string;
  period: string;
  location: string;
  description: string[];
}

export interface Project {
  title: string;
  role: string;
  period: string;
  description: string[];
  techStack?: string[];
  category: 'AI/ML' | 'Software' | 'Engineering' | 'Research';
}

export interface Award {
  year: string;
  title: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

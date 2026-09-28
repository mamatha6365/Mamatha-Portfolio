export interface Project {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  type: 'Full-Stack' | 'Frontend';
  architectureOverview?: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  score: string;
  scoreType: string;
  highlights?: string[];
  status: 'In Progress' | 'Completed';
}

export interface Internship {
  company: string;
  role: string;
  duration: string;
  description: string[];
  projectsAssociated?: string[];
  skillsApplied: string[];
}

export interface Certification {
  title: string;
  organization: string;
  type: string;
  description: string;
}

export interface CodeTopic {
  id: string;
  title: string;
  category: string;
  codeSnippet: string;
  explanation: string;
  keyTakeaways: string[];
}

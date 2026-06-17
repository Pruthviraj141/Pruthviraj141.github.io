export type Project = {
  id: string;
  title: string;
  description: string;
  impact?: string;
  bullets?: string[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

export type Skill = {
  name: string;
};

export type SkillGroup = {
  category: string;
  skills: Skill[];
};

export type Experience = {
  id: string;
  title: string;
  organization: string;
  dateRange: string;
  bullets: string[];
};

export type Achievement = {
  id: string;
  category: string;
  title: string;
  description: string;
  iconName: string;
};

export type NavLink = {
  name: string;
  href: string;
};

export type SocialLink = {
  platform: string;
  url: string;
  iconName: string;
};

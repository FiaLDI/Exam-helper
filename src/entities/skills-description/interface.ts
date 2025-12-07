
export interface skillDescription {
    title: string;
    description: string;
    time: string;
}

export interface SkillCategory {
  title: string;
  items: skillDescription[];
}
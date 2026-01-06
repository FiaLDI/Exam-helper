

export type SkillItemType = {
  capability: string;
  stack: string[];
};

export type SkillGroup = {
  level: string;
  description: string;
  glow?: boolean;
  items: SkillItemType[];
};

export type SkillsDict = {
  title: string;
  subtitle: string;
  groups: SkillGroup[];
};
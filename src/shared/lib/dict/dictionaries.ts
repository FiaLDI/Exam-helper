import { HeroData, HeroDict } from "@/widgets/hero";
import { SkillsData, SkillsDict } from "@/entities/skill";
import { ContactData, ContactDict } from "@/entities/contact";
import { ProjectsData, ProjectsDict } from "@/entities/project";
import { TimelineData, TimelineDict } from "@/entities/timeline";

import { IDict } from "./types";

export const dictionaries = {
  hero: HeroData,
  skills: SkillsData,
  contacts: ContactData,
  projects: ProjectsData,
  timeline: TimelineData,
} satisfies {
  hero: IDict<HeroDict>;
  skills: IDict<SkillsDict>;
  contacts: IDict<ContactDict>;
  projects: IDict<ProjectsDict>;
  timeline: IDict<TimelineDict>;
};

export type DictionaryKey = keyof typeof dictionaries;

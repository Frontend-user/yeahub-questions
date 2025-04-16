import { ISpecialization } from "@/entities/specializations";
import { ISelectItem } from "@/shared/types/types.ts";

interface ISkill {
  id: number;
  title: string;
  description: string;
  imageSrc?: string;
  createdAt: string;
  updatedAt: string;
  specializations: ISpecialization[];
}

interface IFormattedSkill extends ISkill {
  selected: boolean;
}

interface ISkillsInitialState {
  skills: ISkill[];
  formattedSkills: ISelectItem[];
  skillsQueryIds: string[];
  status: string;
}

export type { ISkill, ISkillsInitialState, IFormattedSkill };

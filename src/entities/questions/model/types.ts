import { ISpecialization } from "@/entities/specializations";
import { ISkill } from "@/entities/skills";
import { ISelectItem } from "@/shared/types/types.ts";

export interface IQuestionsPaginateParams {
  page: 1;
  limit: 7;
  total: null;
}

export interface IQuestionsSliceInitialState {
  rateList: ISelectItem[];
  questions: IQuestion[];
  questionDetails: IQuestion;
  questionsPaginateParams: IQuestionsPaginateParams;
}

interface ICreatedBy {
  userId?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
}

interface IQuestion {
  id: number;
  title: string;
  description: string;
  code?: null | string;
  imageSrc?: string | null | undefined;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  status: string;
  rate: number;
  complexity: number;
  createdAt: Date | null;
  updatedAt: Date | null;
  createdBy: ICreatedBy;
  updatedBy: ICreatedBy;
  questionSpecializations: ISpecialization[];
  questionSkills: ISkill[];
}

export type { IQuestion, ICreatedBy, ISpecialization };

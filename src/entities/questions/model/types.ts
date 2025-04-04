import {ISpecialization} from "@/entities/specializations";
import {ISkill} from "@/entities/skills";

interface ICreatedBy {
    userId: string;
    firstName: string;
    lastName: string;
}

export interface IQuestionsPaginateParams {
    page: 1,
    limit: 7,
    total: null
}

export interface IQuestionsSliceInitialState {
    questions: IQuestion[]
    questionDetails: IQuestion
    questionsPaginateParams: IQuestionsPaginateParams
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
    createdBy:string;
    updatedBy: string;
    questionSpecializations: ISpecialization[];
    questionSkills: ISkill[]
}

export type {IQuestion, ICreatedBy, ISpecialization};
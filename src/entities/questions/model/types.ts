import {ISpecialization} from "@/entities/specializations";

interface ICreatedBy {
    userId: string;
    firstName: string;
    lastName: string;
}


interface IQuestionSkill {
    id: number;
    title: string;
    description: string;
    imageSrc: string | null;
    createdAt: Date;
    updatedAt: Date;
    specializations: ISpecialization[];
}

export interface IQuestionsSliceInitialState {
    questions: IQuestion[]
}

interface IQuestion {
    id: number;
    title: string;
    description: string;
    code?: null | string;
    imageSrc?: string | null;
    keywords?: string[];
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
    questionSkills: IQuestionSkill[]
}

export type {IQuestion, ICreatedBy, ISpecialization};
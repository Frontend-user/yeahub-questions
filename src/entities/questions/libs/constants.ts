import {IQuestionsSliceInitialState} from "@/entities/questions";
export const questionsInitialState: IQuestionsSliceInitialState = {
    questions: [],
    questionsPaginateParams: {
        page: 1,
        limit: 7,
        total: null
    },
    questionDetails: {
        id: 0,
        title: "",
        description: "",
        longAnswer: "",
        shortAnswer: "",
        status: "",
        rate: 0,
        complexity: 0,
        createdAt: null,
        updatedAt: null,
        questionSpecializations: [],
        questionSkills: [],
        keywords: [],
        createdBy: "",
        updatedBy: ""
    }
}
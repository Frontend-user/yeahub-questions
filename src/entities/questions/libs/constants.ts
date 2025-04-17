import { IQuestionsSliceInitialState } from "@/entities/questions";
export const questionsInitialState: IQuestionsSliceInitialState = {
  questions: [],
  rateList: [
    {
      id: 1,
      title: "1",
      selected: false,
    },
    {
      id: 2,
      title: "2",
      selected: false,
    },
    {
      id: 3,
      title: "3",
      selected: false,
    },
    {
      id: 4,
      title: "4",
      selected: false,
    },

    {
      id: 5,
      title: "5",
      selected: false,
    },
  ],
  questionsPaginateParams: {
    page: 1,
    limit: 7,
    total: null,
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
    createdBy: {},
    updatedBy: {},
  },
};

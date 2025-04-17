import { IQuestionsSliceInitialState } from "@/entities/questions";
export const questionsInitialState: IQuestionsSliceInitialState = {
  questions: [],
  complexityList: [
    {
      id: 1,
      title: "1-3",
      value: [1, 2, 3],
      selected: false,
    },
    {
      id: 2,
      title: "4-6",
      value: [4, 5, 6],
      selected: false,
    },
    {
      id: 3,
      title: "7-8",
      value: [7, 8, 9],
      selected: false,
    },
    {
      id: 4,
      title: "9-10",
      value: [9, 10],
      selected: false,
    },
  ],
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

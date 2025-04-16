export const API_TOKEN = import.meta.env.VITE_API_TOKEN;
export const API_URL = import.meta.env.VITE_API_URL;
export const API_ROUTES = {
  QUESTIONS: "questions/public-questions",
  SPECIALIZATIONS: "specializations",
  SKILLS: "skills",
  MOCK_QUIZZES: "interview-preparation/quizzes/mock/new",
};

export const enum PAGES {
  MAIN_PAGE = "/",
  INTERVIEW = "interview",
  QUESTIONS = "questions",
  QUESTION_ID = "/question-details/:questionId",
  MOCK_QUIZ = "interview/mock-quiz",
  PASSED_QUESTIONS = "interview/passed-questions",
}

export interface IROUTE_NAMES {
  [key: string]: {
    name: string;
    to: string;
  };
}

export const ROUTE_NAMES: IROUTE_NAMES = {
  "/": {
    name: "Главная",
    to: PAGES.MAIN_PAGE,
  },
  interview: {
    name: "Собеседование",
    to: `/${PAGES.INTERVIEW}`,
  },
  "mock-quiz": {
    name: "Квиз",
    to: `/${PAGES.MOCK_QUIZ}`,
  },
};

export const MOCK_LIMIT_DEFAULT_VALUE: number = 20;
export const DEFAULT_SKILLS_SLICE_COUNT = 6;
export const DEFAULT_SPECIALIZATIONS_SLICE_COUNT = 3;

export const SELECT_TYPE = {
  ONE_ITEM: 1,
  MANY_ITEMS: 2,
};

export const DEFAULT_DEBOUNCE_DELAY = 500;

export const DEFAULT_MOCK_QUESTIONS_MIN_COUNT = 10;
export const DEFAULT_MOCK_QUESTIONS_MAX_COUNT = 50;

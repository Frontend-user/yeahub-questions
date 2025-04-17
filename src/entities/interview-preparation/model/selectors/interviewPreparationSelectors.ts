import { AppStateType } from "@/app/AppStore.ts";

export const getMockQuestionList = (state: AppStateType) =>
  state.interviewPreparation.mockQuestionsList;

export const getCurrentPage = (state: AppStateType) => state.interviewPreparation.currentPage;

export const getTotalPages = (state: AppStateType) => state.interviewPreparation.totalPages;

export const getCurrentMockQuestion = (state: AppStateType) =>
  state.interviewPreparation.currentMockQuestion;

import { AppStateType } from "@/app/AppStore.ts";

export const  getComplexityList = (state: AppStateType) =>
  state.questions.complexityList

export const  getRateList = (state: AppStateType) =>
  state.questions.rateList

export const  getQuestions = (state: AppStateType) =>
  state.questions.questions

export const  getQuestionsPaginateParams = (state: AppStateType) =>
  state.questions.questionsPaginateParams

export const  getQuestionDetails = (state: AppStateType) =>
  state.questions.questionDetails





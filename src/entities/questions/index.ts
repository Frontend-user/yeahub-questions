export {
  useGetQuestionsQuery,
  useGetQuestionByIdQuery,
  questionsApi,
} from "@/entities/questions/api/questionsApi.ts";
export { questionsSlice } from "@/entities/questions/model/questionsSlice.ts";

export {
  addQuestion,
  setQuestionsPaginateParams,
  setQuestionsList,
  chooseRate,
} from "@/entities/questions/model/questionsSlice.ts";

export type {
  IQuestion,
  IQuestionsPaginateParams,
  IQuestionsSliceInitialState,
  ICreatedBy,
  ISpecialization,
} from "./model/types.ts";

export { QuestionsDetails } from "./ui/QuestionsDetails/QuestionsDetails";
export { QuestionsCard } from "./ui/QuestionsCard/QuestionsCard";
export { QuestionsFetchError } from "./ui/QuestionsFetchError/QuestionsFetchError";
export { QuestionsNotFound } from "./ui/QuestionsNotFound/QuestionsNotFound";

export {
  getQuestions,
  getQuestionDetails,
  getComplexityList,
  getRateList,
  getQuestionsPaginateParams,
} from "./model/selectors/questionsSelectors.ts";

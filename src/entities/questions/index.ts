export {useGetQuestionsQuery, getQuestions, questionsApi} from "@/entities/questions/api/questionsApi.ts";
export {questionsSlice} from "@/entities/questions/model/questionsSlice.ts";

export {addQuestion, setQuestionsList} from "@/entities/questions/model/questionsSlice.ts";

export type {IQuestion,IQuestionsSliceInitialState, ICreatedBy, ISpecialization} from "./model/types.ts";

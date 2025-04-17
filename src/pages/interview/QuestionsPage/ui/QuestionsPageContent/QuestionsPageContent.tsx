import { QuestionsSkeleton } from "@/widgets/questions/QuestionsSkeleton";
import {
  IQuestion,
  IQuestionsPaginateParams,
  QuestionsFetchError,
  QuestionsNotFound,
  useGetQuestionsQuery,
} from "@/entities/questions";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { QuestionsListWithPaginate } from "@/widgets/questions/QuestionsListWithPaginate";
import { useSelector } from "react-redux";
import { AppStateType } from "@/app/AppStore.ts";
import { defineParams } from "@/pages/interview/QuestionsPage/libs/helpers.ts";
import { ISelectItem } from "@/shared/types/types.ts";
import { useSearchParams } from "react-router-dom";

const QuestionsPageContent = () => {
  const questionsPaginateParams: IQuestionsPaginateParams = useSelector(
    (state: AppStateType) => state.questions.questionsPaginateParams,
  );

  const complexityList: ISelectItem[] = useSelector(
    (state: AppStateType) => state.questions.complexityList,
  );

  const [searchParams] = useSearchParams();

  const questions: IQuestion[] = useSelector((state: AppStateType) => state.questions.questions);

  const { isLoading: isQuestionsLoading, error: isQuestionsError } = useGetQuestionsQuery(
    defineParams({
      questionsPaginateParams,
      searchParams,
      complexityList,
    }),
  );

  const questionsContent = () => {
    let questionsContent;
    if (isQuestionsLoading) {
      questionsContent = <QuestionsSkeleton />;
    } else if (isQuestionsError) {
      questionsContent = (
        <QuestionsFetchError isQuestionsError={isQuestionsError as FetchBaseQueryError} />
      );
    } else if (!questions.length) {
      questionsContent = <QuestionsNotFound />;
    } else {
      questionsContent = <QuestionsListWithPaginate />;
    }
    return questionsContent;
  };

  return <div>{questionsContent()}</div>;
};

export default QuestionsPageContent;

import { QuestionsSkeleton } from "@/widgets/questions/QuestionsSkeleton";
import {
  getComplexityList, getQuestions, getQuestionsPaginateParams,
  IQuestion,
  IQuestionsPaginateParams,
  QuestionsFetchError,
  QuestionsNotFound,
  useGetQuestionsQuery,
} from "@/entities/questions";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { QuestionsListWithPaginate } from "@/widgets/questions/QuestionsListWithPaginate";
import { defineParams } from "@/pages/interview/QuestionsPage/libs/helpers.ts";
import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "@/shared/hooks/useAppSelector.ts";
import { ISelectItem } from "@/shared/types/types.ts";

const QuestionsPageContent = () => {

  const questionsPaginateParams: IQuestionsPaginateParams = useAppSelector(getQuestionsPaginateParams);
  const complexityList: ISelectItem[] = useAppSelector(getComplexityList);
  const questions: IQuestion[] = useAppSelector(getQuestions)

  const [searchParams] = useSearchParams();

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

import { useMemo } from "react";
import "./QuestionsListWithPaginate.scss";
import { QuestionsList } from "@/widgets/questions/QuestionsList";
import { getQuestions, getQuestionsPaginateParams, IQuestion } from "@/entities/questions";
import { QuestionsPaginate } from "@/features/questions/QuestionsPaginate";
import { useAppSelector } from "@/shared/hooks/useAppSelector.ts";

export const QuestionsListWithPaginate = () => {
  const questionsPaginateParams = useAppSelector(getQuestionsPaginateParams)
  const questions:IQuestion[] = useAppSelector(getQuestions)

  const showPaginate = useMemo(() => {
    if (questionsPaginateParams.total) {
      return Math.ceil(questionsPaginateParams.total / questionsPaginateParams.limit) > 1;
    }

    return false;
  }, [questionsPaginateParams]);

  return (
    <div className="questions-list-with-paginate">
      <div className="questions-list-with-paginate__inner">
        <div className="questions-list-with-paginate__title">Вопросы React, JavaScript</div>
        <QuestionsList questions={questions} />

        {showPaginate && (
          <div className="questions-list-with-paginate__pagination">
            <QuestionsPaginate />
          </div>
        )}
      </div>
    </div>
  );
};

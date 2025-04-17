import "./QuestionDetailsPage.scss";
import {
  getQuestionDetails,
  QuestionsDetails,
  useGetQuestionByIdQuery,
} from "@/entities/questions";
import { useParams } from "react-router-dom";
import { QuestionsDetailsSkeleton } from "@/widgets/questions/QuestionsDetailsSkeleton";
import { useAppSelector } from "@/shared/hooks/useAppSelector.ts";

const QuestionDetailsPage = () => {
  const questionDetails = useAppSelector(getQuestionDetails);
  const { questionId } = useParams();
  const { isLoading } = useGetQuestionByIdQuery(questionId);

  return (
    <div className="questions-details-page">
      {isLoading ? <QuestionsDetailsSkeleton /> : <QuestionsDetails question={questionDetails} />}
    </div>
  );
};

export default QuestionDetailsPage;

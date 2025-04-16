import "./QuestionsPage.scss";
import QuestionsPageContent from "@/pages/interview/QuestionsPage/ui/QuestionsPageContent/QuestionsPageContent.tsx";
import QuestionPageFilters from "@/pages/interview/QuestionsPage/ui/QuestionPageFilters/QuestionPageFilters.tsx";

const QuestionsPage = () => {
  return (
    <div className="questions-page">
      <QuestionsPageContent />
      <QuestionPageFilters />
    </div>
  );
};

export default QuestionsPage;

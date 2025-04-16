import { QuizStepWidget } from "@/widgets/questions/QuizStepWidget";
import { QuestionsProgressBar } from "@/widgets/questions/QuestionsProgressBar";

import { PageRoutes } from "@/widgets/page-routes";

const MockQuizPage = () => {
  return (
    <div>
      <div style={{ display: "none" }}>v-show</div>
      <br />
      <PageRoutes />
      <br />
      <br />
      <QuestionsProgressBar />
      <QuizStepWidget />
    </div>
  );
};

export default MockQuizPage;

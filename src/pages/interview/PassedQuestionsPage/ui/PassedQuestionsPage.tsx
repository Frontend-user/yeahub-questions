import classes from "./PassedQuestionsPage.module.scss";
import { PassedQuestionsList } from "@/entities/interview-preparation";
import { PageRoutes } from "@/widgets/page-routes";

const PassedQuestionsPage = () => {
  return (
    <div className={classes.block}>
      <div className={classes.routesWrapper}>
        <PageRoutes />
      </div>
      <PassedQuestionsList />
    </div>
  );
};

export default PassedQuestionsPage;

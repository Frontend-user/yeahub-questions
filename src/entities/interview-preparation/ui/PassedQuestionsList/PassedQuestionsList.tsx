import classes from "./PassedQuestionsList.module.scss";
import UiButton from "@/shared/ui/UiButton/UiButton.tsx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PAGES } from "@/shared/constats/constats.ts";
import { resetMockPassage } from "@/entities/interview-preparation/model/interviewPreparationSlice.ts";
import { IMockQuestion } from "@/entities/interview-preparation/model/types.ts";
import { AppStateType } from "@/app/AppStore.ts";
import { PassedQuestionCard } from "@/entities/interview-preparation";

const PassedQuestionsList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const list: IMockQuestion[] = useSelector(
    (state: AppStateType) => state.interviewPreparation.mockQuestionsList,
  );

  const trySameQuestions = () => {
    dispatch(resetMockPassage());
    navigate(`/${PAGES.MOCK_QUIZ}`);
  };

  return (
    <div className={classes.block}>
      <div className={classes.inner}>
        <div className={classes.title}>Список пройденных вопросов собеседования</div>
        <div className={classes.listWrap}>
          {list.map((item) => (
            <PassedQuestionCard
              id={item.id}
              question={item.title}
              key={item.id}
              isUserKnow={item.isUserKnow}
            />
          ))}
        </div>
        <UiButton onClick={trySameQuestions} className={classes.resetButton}>
          Пройти заново
        </UiButton>
      </div>
    </div>
  );
};

export { PassedQuestionsList };

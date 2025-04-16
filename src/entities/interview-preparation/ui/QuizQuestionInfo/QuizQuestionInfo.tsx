import classes from "./QuizQuestionInfo.module.scss";
import UiButton from "@/shared/ui/UiButton/UiButton.tsx";
import parse from "html-react-parser";
import quizImage from "@/shared/assets/images/quiz-img.png";
import { ReactNode } from "react";
import UiImage from "@/shared/ui/UiImage/UiImage.tsx";

interface IQuizQuestionInfoProps {
  changeUserKnowButtonsRender?: ReactNode;
  toggleShowAnswerButton: () => void;
  title: string;
  showAnswer: boolean;
  shortAnswer: string;
}

const QuizQuestionInfo = ({
  title,
  showAnswer,
  shortAnswer,
  toggleShowAnswerButton,
  changeUserKnowButtonsRender,
}: IQuizQuestionInfoProps) => {
  return (
    <div className={classes.content}>
      <div className={classes.info}>
        <div className={classes.title}>{title}</div>

        <UiButton
          className={
            showAnswer ? classes.hideShowAnswerButton : classes.showAnswerButton
          }
          onClick={toggleShowAnswerButton}
          type={showAnswer ? `select_open` : `select`}
          text={showAnswer ? "Скрыть" : "Посмотреть ответ"}
        />

        {showAnswer && (
          <div className={classes.shortAnswerBlock}>{parse(shortAnswer)}</div>
        )}

        <div className={classes.likeButtonsWrap}>
          {changeUserKnowButtonsRender}
        </div>
      </div>
      <UiImage src={quizImage} className={classes.image} />
    </div>
  );
};

export { QuizQuestionInfo };

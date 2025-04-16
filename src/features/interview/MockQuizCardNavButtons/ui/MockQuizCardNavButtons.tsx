import UiButton from "@/shared/ui/UiButton/UiButton.tsx";
import {
  nextPageAction,
  prevPageAction,
  selectCurrentMockQuestion,
} from "@/entities/interview-preparation";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "@/app/AppStore.ts";

interface MockQuizCardNavButtonsProps {
  nextQuestionId: null | number;
  prevQuestionId: null | number;
  showAnswer: boolean;
  toggleShowAnswerButton: () => void;
}

export const MockQuizCardNavButtons = ({
  toggleShowAnswerButton,
  nextQuestionId,
  prevQuestionId,
  showAnswer,
}: MockQuizCardNavButtonsProps) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(
    (state: AppStateType) => state.interviewPreparation.currentPage,
  );
  const totalPages = useSelector(
    (state: AppStateType) => state.interviewPreparation.totalPages,
  );

  const nextPage = () => {
    if (showAnswer) {
      toggleShowAnswerButton();
    }
    if (currentPage + 1 > totalPages) {
      return;
    }
    dispatch(nextPageAction());
    if (nextQuestionId) {
      dispatch(selectCurrentMockQuestion(nextQuestionId));
    }
  };
  const prevPage = () => {
    if (currentPage - 1 < 1) {
      return;
    }
    if (showAnswer) {
      toggleShowAnswerButton();
    }
    dispatch(prevPageAction());
    if (prevQuestionId) {
      dispatch(selectCurrentMockQuestion(prevQuestionId));
    }
  };
  return (
    <>
      <UiButton onClick={prevPage} type="arrow-left">
        Назад
      </UiButton>
      {totalPages !== currentPage && (
        <UiButton onClick={nextPage} type="arrow-right">
          Далее
        </UiButton>
      )}
    </>
  );
};

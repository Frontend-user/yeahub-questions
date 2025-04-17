import UiButton from "@/shared/ui/UiButton/UiButton.tsx";
import {
  getCurrentPage, getTotalPages,
  nextPageAction,
  prevPageAction,
  selectCurrentMockQuestion,
} from "@/entities/interview-preparation";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useAppSelector.ts";

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
  const currentPage = useAppSelector(getCurrentPage);
  const totalPages = useAppSelector(getTotalPages);

  const dispatch = useAppDispatch();

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

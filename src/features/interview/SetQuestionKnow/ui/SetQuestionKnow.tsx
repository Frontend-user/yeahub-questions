import UiButton from "@/shared/ui/UiButton/UiButton.tsx";
import { changeUserKnowStatus } from "@/entities/interview-preparation";
import { LikeTypes } from "@/shared/types/types.ts";
import { useAppDispatch } from "@/shared/hooks/useAppSelector.ts";

interface SetQuestionKnowProps {
  id: number;
  isUserKnow: boolean;
  value: boolean;
  text: string;
  type: LikeTypes;
}

export const SetQuestionKnow = ({ id, type, isUserKnow, value, text }: SetQuestionKnowProps) => {
  const dispatch = useAppDispatch();
  const setMockQuestionUserKnow = () => {
    dispatch(
      changeUserKnowStatus({
        id,
        value,
      }),
    );
  };
  return (
    <UiButton
      onClick={setMockQuestionUserKnow}
      className={`${isUserKnow && `ui-button__${type}_active`}`}
      type={type}
    >
      {text}
    </UiButton>
  );
};

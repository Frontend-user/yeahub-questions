import { SetQuestionKnow } from "@/features/interview/SetQuestionKnow";

interface MockQuestionUserKnowButtonsProps {
  isUserKnow: boolean;
  id: number;
}

export const MockQuestionUserKnowButtons = ({
  isUserKnow,
  id,
}: MockQuestionUserKnowButtonsProps) => {
  return (
    <>
      <SetQuestionKnow value={true} text="Знаю" type={"like"} isUserKnow={isUserKnow} id={id} />
      <SetQuestionKnow
        value={false}
        text="Не Знаю"
        type={"dislike"}
        isUserKnow={!isUserKnow}
        id={id}
      />
    </>
  );
};

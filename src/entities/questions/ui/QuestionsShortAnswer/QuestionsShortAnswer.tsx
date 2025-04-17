import UiTextHtml from "@/shared/ui/UiTextHtml/UiTextHtml.tsx";
import "./QuestionsShortAnswer.scss";

interface QuestionsShortAnswerProps {
  shortAnswer: string;
}

const QuestionsShortAnswer = ({ shortAnswer }: QuestionsShortAnswerProps) => {
  return (
    <div className="questions-short-answer">
      <div className="questions-short-answer__inner">
        <div className="questions-short-answer__title">Краткий ответ</div>
        <UiTextHtml className="questions-short-answer__text">{shortAnswer}</UiTextHtml>
      </div>
    </div>
  );
};

export default QuestionsShortAnswer;

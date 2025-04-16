import "./QuestionsShortAnswer.scss";

interface QuestionsShortAnswerProps {
  shortAnswer: string;
}
import parse from "html-react-parser";
const QuestionsShortAnswer = ({ shortAnswer }: QuestionsShortAnswerProps) => {
  return (
    <div className="questions-short-answer">
      <div className="questions-short-answer__inner">
        <div className="questions-short-answer__title">Краткий ответ</div>
        <div className="questions-short-answer__text">{parse(shortAnswer)}</div>
      </div>
    </div>
  );
};

export default QuestionsShortAnswer;

import './QuestionsList.scss'
import {IQuestion, QuestionsCard} from "@/entities/questions";

type QuestionsProps = {
    questions: IQuestion[];
}
export const QuestionsList = ({questions}: QuestionsProps) => {
    return (
        <div className="questions-list">
            {questions.length && questions.map((question: IQuestion) => (
                <QuestionsCard
                    key={question.id}
                    id={question.id}
                    title={question.title}
                    rate={question.rate}
                    complexity={question.complexity}
                    shortAnswer={question.shortAnswer}
                />
            ))}
        </div>
    );
};


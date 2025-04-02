import React from 'react';
import QuestionsCard from "@/entities/questions/ui/QuestionsCard/QuestionsCard.tsx";
import './QuestionsList.scss'
import {IQuestion} from "@/entities/questions";

type QuestionsProps = {
    questions: IQuestion[];
}
const QuestionsList: React.FC<QuestionsProps> = ({questions}) => {
    return (
        <div className="questions-list">
            {questions.length && (questions.map((question: IQuestion) => (
                    <QuestionsCard
                        key={question.id}
                        id={question.id}
                        title={question.title}
                        rate={question.rate}
                        complexity={question.complexity}
                        shortAnswer={question.shortAnswer}

                    />
                ))) ||
                ''}
        </div>
    );
};

export default QuestionsList;
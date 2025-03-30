import React from 'react';
import {STATIC_QUESTIONS_LIST} from "@/shared/constats/constats.ts";
import QuestionsCard from "@/entities/questions/ui/QuestionsCard/QuestionsCard.tsx";
import './QuestionsList.scss'
const QuestionsList: React.FC = () => {
    return (
        <div className="questions-list">
            {STATIC_QUESTIONS_LIST.map((question) => (
                <QuestionsCard
                    key={question.id}
                    id={question.id}
                    title={question.title}
                    shortAnswer={question.shortAnswer}

                />
            ))}
        </div>
    );
};

export default QuestionsList;
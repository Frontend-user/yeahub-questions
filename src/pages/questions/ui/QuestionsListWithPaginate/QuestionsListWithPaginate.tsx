import React from 'react';
import './QuestionsListWithPaginate.scss'
import QuestionsList from "@/widgets/questions/ui/QuestionsList/QuestionsList.tsx";

const QuestionsListWithPaginate: React.FC = () => {
    return (
        <div className="questions-list-with-paginate">
            <div className="questions-list-with-paginate__inner">
                <div className="questions-list-with-paginate__title">Вопросы React, JavaScript</div>
                <QuestionsList/>
                <div className="questions-list-with-paginate__pagination"></div>
            </div>
        </div>
    );
};

export default QuestionsListWithPaginate;
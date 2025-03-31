import React from 'react';
import './QuestionsListWithPaginate.scss'
import QuestionsList from "@/widgets/questions/ui/QuestionsList/QuestionsList.tsx";
import {useSelector} from "react-redux";
import {IQuestion} from "@/entities/questions";

const QuestionsListWithPaginate: React.FC = () => {
    const questions: IQuestion[] = useSelector((state) => state.questions.questions);
    return (
        <div className="questions-list-with-paginate">
            <div className="questions-list-with-paginate__inner">
                <div className="questions-list-with-paginate__title">Вопросы React, JavaScript</div>
                <QuestionsList questions={questions}/>

                <div className="questions-list-with-paginate__pagination"></div>
            </div>
        </div>
    );
};

export default QuestionsListWithPaginate;
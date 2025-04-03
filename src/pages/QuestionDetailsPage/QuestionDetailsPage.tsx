import './QuestionDetailsPage.scss'
import React from "react";
import {useGetQuestionByIdQuery} from "@/entities/questions";
import {useSelector} from "react-redux";
import {AppStateType} from "@/app/AppStore.ts";
import QuestionsDetails from "@/entities/questions/ui/QuestionsDetails/QuestionsDetails.tsx";
import {useParams } from "react-router-dom";

const QuestionDetailsPage: React.FC = () => {
    const {questionId} = useParams()
    const {isLoading} = useGetQuestionByIdQuery(questionId)
    const question = useSelector((state: AppStateType) => state.questions.questionDetails)
    return (
        <div className="questions-details-page">
            {!isLoading && (<QuestionsDetails question={question}/>)}
        </div>
    );
};

export default QuestionDetailsPage;
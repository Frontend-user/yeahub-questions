import './QuestionDetailsPage.scss'
import React from "react";
import {useGetQuestionByIdQuery} from "@/entities/questions";
import {useSelector} from "react-redux";
import {AppStateType} from "@/app/AppStore.ts";
import QuestionsDetails from "@/entities/questions/ui/QuestionsDetails/QuestionsDetails.tsx";
import {useParams} from "react-router-dom";
import QuestionsDetailsSkeleton from "@/pages/questions/ui/QuestionsDetailsSkeleton/QuestionsDetailsSkeleton.tsx";

const QuestionDetailsPage: React.FC = () => {
    const {questionId} = useParams()
    const {isLoading} = useGetQuestionByIdQuery(questionId)
    const question = useSelector((state: AppStateType) => state.questions.questionDetails)
    return (
        <div className="questions-details-page">
            {isLoading ? <QuestionsDetailsSkeleton/> : (<QuestionsDetails question={question}/>)}
        </div>
    );
};

export default QuestionDetailsPage;
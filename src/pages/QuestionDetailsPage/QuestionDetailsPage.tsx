import './QuestionDetailsPage.scss'
import React, {useEffect} from "react";
import {useGetQuestionByIdQuery} from "@/entities/questions";
import {useSelector} from "react-redux";
import {AppStateType} from "@/app/AppStore.ts";
import QuestionsDetails from "@/entities/questions/ui/QuestionsDetails/QuestionsDetails.tsx";
import {useParams, useSearchParams} from "react-router-dom";

const QuestionDetailsPage: React.FC = () => {
    const {questionId} = useParams()
    const {isLoading} = useGetQuestionByIdQuery(questionId)
    const question = useSelector((state: AppStateType) => state.questions.questionDetails)
    useEffect(() => {
        if(question){
            if(question.createdBy){
                console.log(JSON.parse(question.createdBy).firstName)
            }
        }
    }, [question]);
    return (
        <div className="questions-details-page">
            {!isLoading && (<QuestionsDetails question={question}/>)}
        </div>
    );
};

export default QuestionDetailsPage;
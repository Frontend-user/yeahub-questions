import './QuestionDetailsPage.scss'
import {QuestionsDetails, useGetQuestionByIdQuery} from "@/entities/questions";
import {useSelector} from "react-redux";
import {AppStateType} from "@/app/AppStore.ts";
import {useParams} from "react-router-dom";
import {QuestionsDetailsSkeleton} from "@/widgets/questions/QuestionsDetailsSkeleton";

const QuestionDetailsPage = () => {
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
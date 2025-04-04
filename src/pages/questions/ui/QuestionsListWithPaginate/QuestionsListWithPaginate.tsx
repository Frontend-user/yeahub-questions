import React, {useMemo} from 'react';
import './QuestionsListWithPaginate.scss'
import QuestionsList from "@/widgets/questions/ui/QuestionsList/QuestionsList.tsx";
import {useSelector} from "react-redux";
import {IQuestion} from "@/entities/questions";
import QuestionsPaginate from "@/feutures/questions/ui/QuestionsPaginate/QuestionsPaginate.tsx";
import {AppStateType} from "@/app/AppStore.ts";

const QuestionsListWithPaginate: React.FC = () => {
    const questionsPaginateParams = useSelector((state: AppStateType) => state.questions.questionsPaginateParams)
    const questions: IQuestion[] = useSelector((state: AppStateType) => state.questions.questions);
    const showPaginate = useMemo(() => {
        if (questionsPaginateParams.total) {
            return Math.ceil(questionsPaginateParams.total / questionsPaginateParams.limit) > 1
        }
        return false
    }, [questionsPaginateParams])
    return (
        <div className="questions-list-with-paginate">
            <div className="questions-list-with-paginate__inner">
                <div className="questions-list-with-paginate__title">Вопросы React, JavaScript</div>
                <QuestionsList questions={questions}/>

                {showPaginate && (
                    <div className="questions-list-with-paginate__pagination">
                        <QuestionsPaginate/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuestionsListWithPaginate;
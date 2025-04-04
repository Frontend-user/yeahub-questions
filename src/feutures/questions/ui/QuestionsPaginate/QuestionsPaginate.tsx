import React from 'react';
import './QuestionsPaginate.scss'
import UiPaginate from "@/shared/ui/UiPaginate/UiPaginate.tsx";
import {useSelector} from "react-redux";
import {AppStateType} from "@/app/AppStore.ts";
import {SetURLSearchParams, useSearchParams} from "react-router-dom";
import {useQuestionsPaginate} from "@/feutures/questions/libs/hooks/useQuestionsPaginate.tsx";
import {IQuestionsPaginateParams} from "@/entities/questions/model/types.ts";


const QuestionsPaginate: React.FC = () => {
    const questionsPaginateParams: IQuestionsPaginateParams = useSelector((state: AppStateType) => state.questions.questionsPaginateParams)
    const [searchParams, setSearchParams]:[URLSearchParams,SetURLSearchParams] = useSearchParams()
    const [
        paginateParams,
        nextPage,
        selectPage,
        prevPage] = useQuestionsPaginate({questionsPaginateParams, searchParams, setSearchParams})


    return (
        <div>
            {questionsPaginateParams && questionsPaginateParams.total && (<UiPaginate
                lastPage={paginateParams.lastPage}
                firstPage={paginateParams.firstPage}
                showPages={paginateParams.showPages}
                currentPage={paginateParams.currentPage}
                onHandleNextPage={nextPage}
                selectPage={selectPage}
                onHandlePrevPage={prevPage}/>)}
        </div>
    );
};

export default QuestionsPaginate;
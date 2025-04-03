import React, {useEffect, useState} from 'react';
import './QuestionsPaginate.scss'
import UiPaginate from "@/shared/ui/UiPaginate/UiPaginate.tsx";
import {useSelector} from "react-redux";
import {AppStateType} from "@/app/AppStore.ts";
import {useSearchParams} from "react-router-dom";

interface IPaginateParams {
    firstPage: number,
    lastPage: number,
    showPages: number[],
    currentPage: number
}

const QuestionsPaginate: React.FC = () => {
    const questionsPaginateParams = useSelector((state: AppStateType) => state.questions.questionsPaginateParams)
    const [searchParams, setSearchParams] = useSearchParams()
    const [paginateParams, setPaginateParams] = useState<IPaginateParams>({
        firstPage: 1,
        lastPage: 10,
        showPages: [],
        currentPage: 1
    })

    function defineShowPages(currentPage: number, lastPage = paginateParams.lastPage) {
        let defineLastPage = lastPage
        let start = currentPage - 3
        let result = []
        if (start < 1) {
            start = 1
        }
        if (start + 5 > defineLastPage && start > 1) {
            start = defineLastPage - 5
            if(start < 1){
                start = 1
            }
        }
        if (defineLastPage >= 6) {
            result = [
                start,
                start + 1,
                start + 2,
                start + 3,
                start + 4,
                start + 5,
            ]
        } else {
            for (let i = 0; i < defineLastPage; i++) {
                result.push(start + i)
            }

        }
        return result
    }

    const nextPage = () => {
        if (paginateParams.currentPage + 1 > paginateParams.lastPage) return

        setPaginateParams(pr => ({
            ...pr,
            currentPage: pr.currentPage + 1,
            showPages: defineShowPages(pr.currentPage + 1)
        }))
        searchParams.set('page', paginateParams.currentPage + 1)
        setSearchParams(searchParams)
    }
    const prevPage = () => {
        if (paginateParams.currentPage - 1 < 1) return
        setPaginateParams(pr => ({
            ...pr,
            currentPage: pr.currentPage - 1,
            showPages: defineShowPages(pr.currentPage - 1)
        }))
        searchParams.set('page', paginateParams.currentPage - 1)
        setSearchParams(searchParams)
    }
    const selectPage = (newPage: number) => {
        setPaginateParams(pr => ({
            ...pr,
            currentPage: newPage,
            showPages: defineShowPages(newPage)
        }))
        searchParams.set('page', newPage)
        setSearchParams(searchParams)
    }
    useEffect(() => {
        if (!questionsPaginateParams.total) return
        const lastPage = Math.ceil(questionsPaginateParams.total / questionsPaginateParams.limit)
        const showPages = defineShowPages(questionsPaginateParams.page, lastPage)
        if (showPages.some(i => isNaN(i))) {
            return
        }
        setPaginateParams(pr => ({
            ...pr,
            firstPage: 1,
            lastPage,
            currentPage: questionsPaginateParams.page,
            showPages
        }))
    }, [questionsPaginateParams]);
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
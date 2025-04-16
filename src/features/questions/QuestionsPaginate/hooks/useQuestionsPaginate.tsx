import {useEffect, useState} from "react";
import {IPaginateParams} from "@/features/questions/QuestionsPaginate/model/types.ts";
import {IQuestionsPaginateParams} from "@/entities/questions";
import {SetURLSearchParams} from "react-router-dom";

export interface PropsUseQuestionsPaginate {
    questionsPaginateParams: IQuestionsPaginateParams
    searchParams: URLSearchParams,
    setSearchParams:SetURLSearchParams
}

type ReturnUseQuestionsPaginate = [
    IPaginateParams,
    nextPage: () => void,
    selectPage: (newPage: number) => void,
    prevPage: () => void,
];
export const useQuestionsPaginate = ({
                                         questionsPaginateParams,
                                         searchParams,
                                         setSearchParams
                                     }: PropsUseQuestionsPaginate): ReturnUseQuestionsPaginate => {
    const [paginateParams, setPaginateParams] = useState<IPaginateParams>({
        firstPage: 1,
        lastPage: 10,
        showPages: [],
        currentPage: 1
    })

    function defineShowPages(currentPage: number, lastPage = paginateParams.lastPage) {
        const defineLastPage = lastPage
        let start = currentPage - 3
        let result = []
        if (start < 1) {
            start = 1
        }
        if (start + 5 > defineLastPage && start > 1) {
            start = defineLastPage - 5
            if (start < 1) {
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

        searchParams.set('page', String(paginateParams.currentPage + 1))
        setSearchParams(searchParams)
    }


    const prevPage = () => {
        if (paginateParams.currentPage - 1 < 1) return

        setPaginateParams(pr => ({
            ...pr,
            currentPage: pr.currentPage - 1,
            showPages: defineShowPages(pr.currentPage - 1)
        }))

        searchParams.set('page', String(paginateParams.currentPage - 1))
        setSearchParams(searchParams)
    }


    const selectPage = (newPage: number) => {
        setPaginateParams(pr => ({
            ...pr,
            currentPage: newPage,
            showPages: defineShowPages(newPage)
        }))
        searchParams.set('page', String(newPage))
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

    return [
        paginateParams,
        nextPage,
        selectPage,
        prevPage
    ]
}
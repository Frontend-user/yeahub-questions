import {useEffect, useMemo} from "react";
import {IQuestion, useGetQuestionsQuery} from "@/entities/questions";
import QuestionsListWithPaginate from "@/pages/questions/ui/QuestionsListWithPaginate/QuestionsListWithPaginate.tsx";
import QuestionsFilters from "@/pages/questions/ui/QuestionsFilters/QuestionsFilters.tsx";
import './QuestionsPage.scss'
import {useGetSpecializationsQuery} from "@/entities/specializations";
import {useSearchParams} from "react-router-dom";
import {useGetSkillsQuery} from "@/entities/skills";
import {useSelector} from "react-redux";
import {AppStateType} from "@/app/AppStore.ts";
import QuestionsSkeleton from "@/pages/questions/ui/QuestionsSkeleton/QuestionsSkeleton.tsx";
import FiltersSkeleton from "@/pages/questions/ui/FiltersSkeleton/FiltersSkeleton.tsx";
import {defineParams} from "@/pages/questions/libs/helpers.ts";
import {IQuestionsPaginateParams} from "@/entities/questions/model/types.ts";
import {ISelectItem} from "@/shared/model/types/types.ts";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import QuestionsFetchError from "@/entities/questions/ui/QuestionsFetchError/QuestionsFetchError.tsx";
import QuestionsNotFound from "@/entities/questions/ui/QuestionsNotFound/QuestionsNotFound.tsx";

const QuestionsPage = () => {
    const [searchParams] = useSearchParams()
    const {isLoading: isSpecsLoading} = useGetSpecializationsQuery({})
    const {isLoading: isSkillsLoading} = useGetSkillsQuery({})
    const questionsPaginateParams: IQuestionsPaginateParams = useSelector((state: AppStateType) => state.questions.questionsPaginateParams)
    const complexityList: ISelectItem[] = useSelector((state: AppStateType) => state.complexity.complexityList)
    const questions: IQuestion[] = useSelector((state: AppStateType) => state.questions.questions);
    const {isLoading: isQuestionsLoading, error: isQuestionsError, refetch}
        = useGetQuestionsQuery(
        defineParams({questionsPaginateParams, searchParams, complexityList}))


    useEffect(() => {
        defineParams({questionsPaginateParams, searchParams, complexityList})
        refetch()
    }, [searchParams, refetch])


    const memoizedQuestionsContent = useMemo(()=>{
        let questionsContent;
        if (isQuestionsLoading) {
            questionsContent = <QuestionsSkeleton/>;
        } else if (isQuestionsError) {
            questionsContent = <QuestionsFetchError isQuestionsError={isQuestionsError as FetchBaseQueryError}/>;
        } else if (!questions.length) {
            questionsContent = <QuestionsNotFound/>;
        } else {
            questionsContent = <QuestionsListWithPaginate/>;
        }
        return questionsContent
    },[isQuestionsError,isQuestionsLoading, questions])

    const memoizedFilterContent = useMemo(()=>{
       return (isSpecsLoading || isSkillsLoading) ? <FiltersSkeleton/> : <QuestionsFilters/>
    },[isSpecsLoading, isSkillsLoading])

    return (
        <div className="questions-page">
            {memoizedQuestionsContent}
            {memoizedFilterContent}
        </div>
    );
};

export default QuestionsPage;
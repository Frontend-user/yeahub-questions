import {useEffect, useMemo} from "react";
import {IQuestion, useGetQuestionsQuery} from "@/entities/questions";
import './QuestionsPage.scss'
import {useGetSpecializationsQuery} from "@/entities/specializations";
import {useSearchParams} from "react-router-dom";
import {useGetSkillsQuery} from "@/entities/skills";
import {useSelector} from "react-redux";
import {AppStateType} from "@/app/AppStore.ts";
import {FiltersSkeleton} from "@/widgets/questions/FiltersSkeleton";
import {defineParams} from "@/pages/interview/QuestionsPage/libs/helpers.ts";
import {IQuestionsPaginateParams} from "@/entities/questions/model/types.ts";
import {ISelectItem} from "@/shared/types/types.ts";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import QuestionsFetchError from "@/entities/questions/ui/QuestionsFetchError/QuestionsFetchError.tsx";
import QuestionsNotFound from "@/entities/questions/ui/QuestionsNotFound/QuestionsNotFound.tsx";
import {QuestionsListWithPaginate} from "@/widgets/questions/QuestionsListWithPaginate";
import {QuestionsFilters} from "@/widgets/questions/QuestionsFilters";
import {QuestionsSkeleton} from "@/widgets/questions/QuestionsSkeleton";

export const QuestionsPage = () => {
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


    const memoizedQuestionsContent = useMemo(() => {
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
    }, [isQuestionsError, isQuestionsLoading, questions])

    const memoizedFilterContent = useMemo(() => {
        return (isSpecsLoading || isSkillsLoading) ? <FiltersSkeleton/> : <QuestionsFilters/>
    }, [isSpecsLoading, isSkillsLoading])

    return (
        <div className="questions-page">
            {memoizedQuestionsContent}
            {memoizedFilterContent}
        </div>
    );
};


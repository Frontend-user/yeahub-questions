import {useEffect} from "react";
import {useGetQuestionsQuery} from "@/entities/questions";
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

const QuestionsPage = () => {
    const [searchParams] = useSearchParams()
    const {isLoading: isSpecsLoading} = useGetSpecializationsQuery({})
    const {isLoading: isSkillsLoading} = useGetSkillsQuery({})
    const questionsPaginateParams = useSelector((state: AppStateType) => state.questions.questionsPaginateParams)
    const complexityList = useSelector((state: AppStateType) => state.complexity.complexityList)
    const {isLoading: isQuestionsLoading, error: isQuestionsError, refetch} = useGetQuestionsQuery(defineParams(questionsPaginateParams, searchParams, complexityList))


    useEffect(() => {
        defineParams(questionsPaginateParams, searchParams, complexityList)
        refetch()
    }, [searchParams, isQuestionsError, refetch])
    return (
        <div className="questions-page">
            {isQuestionsLoading
                ? (<QuestionsSkeleton/>)
                : isQuestionsError ? (<div>
                    <p>Не получилось загрузить вопросы </p>
                    <p>Статус ошибки: {isQuestionsError?.data.statusCode}</p>
                    <p>Текс ошибки: {isQuestionsError?.data.message}</p>
                </div>) : <QuestionsListWithPaginate/>}
            {(isSpecsLoading || isSkillsLoading) && (<FiltersSkeleton/>)
                || <QuestionsFilters/>}
        </div>
    );
};

export default QuestionsPage;
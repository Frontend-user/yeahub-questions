import React, {useEffect} from "react";
import {useGetQuestionsQuery} from "@/entities/questions";
import QuestionsListWithPaginate from "@/pages/questions/ui/QuestionsListWithPaginate/QuestionsListWithPaginate.tsx";
import QuestionsFilters from "@/pages/questions/ui/QuestionsFilters/QuestionsFilters.tsx";
import './QuestionsPage.scss'
import {useGetSpecializationsQuery} from "@/entities/specializations";
import {useSearchParams} from "react-router-dom";
import {useGetSkillsQuery} from "@/entities/skills";
import {useSelector} from "react-redux";
import {AppStateType} from "@/app/AppStore.ts";
import {ISelectItem} from "@/shared/model/types/types.ts";

const QuestionsPage: React.FC = () => {
    const [searchParams] = useSearchParams()
    useGetSpecializationsQuery({})
    useGetSkillsQuery({})
    const questionsPaginateParams = useSelector((state: AppStateType) => state.questions.questionsPaginateParams)
    const complexityList = useSelector((state: AppStateType) => state.complexity.complexityList)
    const {refetch} = useGetQuestionsQuery(defineParams())

    function defineParams() {
        const params: {
            specialization?: number
            keywords?: string | null
            skills?: string[]
            complexity?: string[]
            rate?: string[]
            limit?: number
            page?: string
        } = {}
        if (searchParams.get('specialization')) {
            params['specialization'] = Number(searchParams.get('specialization'))
        }
        if (searchParams.get('keywords')) {
            params['keywords'] = searchParams.get('keywords')
        }
        if (searchParams.get('rate')) {
            params['rate'] = searchParams.getAll('rate')
        }
        if (searchParams.get('skills')) {
            params['skills'] = searchParams.getAll('skills')
        }
        if (searchParams.get('limit')) {
            params['limit'] = Number(searchParams.get('limit'))
        } else {
            params['limit'] = questionsPaginateParams.limit
        }
        if (searchParams.get('page')) {
            params['page'] = Number(searchParams.get('page'))
        } else {
            params['page'] = questionsPaginateParams.page
        }

        const complexityIds = searchParams.getAll('complexity')
        const arr: number[] = []
        if (complexityIds.length && complexityList) {
            complexityIds.forEach((id) => {
                const findItem: ISelectItem | undefined = complexityList.find(_ => _.id === +id)
                if (findItem && findItem.value) {
                    arr.push(...findItem.value)
                }
            })
            params['complexity'] = arr.map(_ => String(_))
        }
        return params
    }

    useEffect(() => {
        refetch()
    }, [searchParams, refetch])
    return (
        <div className="questions-page">
            <QuestionsListWithPaginate/>
            <QuestionsFilters/>
        </div>
    );
};

export default QuestionsPage;
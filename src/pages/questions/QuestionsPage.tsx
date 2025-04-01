import React, {useEffect} from "react";
import {useGetQuestionsQuery} from "@/entities/questions";
import QuestionsListWithPaginate from "@/pages/questions/ui/QuestionsListWithPaginate/QuestionsListWithPaginate.tsx";
import QuestionsFilters from "@/pages/questions/ui/QuestionsFilters/QuestionsFilters.tsx";
import './QuestionsPage.scss'
import {useGetSpecializationsQuery} from "@/entities/specializations";
import {useSearchParams} from "react-router-dom";
import {useGetSkillsQuery} from "@/entities/skills";

const QuestionsPage: React.FC = () => {
    const [searchParams] = useSearchParams()
    useGetSpecializationsQuery({})
    useGetSkillsQuery({})
    const {refetch} = useGetQuestionsQuery(defineParams())

    function defineParams() {
        const params: {
            specialization?: number
            keywords?: string | null
            skills?: string[]
        } = {}
        if (searchParams.get('specialization')) {
            params['specialization'] = Number(searchParams.get('specialization'))
        }
        if (searchParams.get('keywords')) {
            params['keywords'] = searchParams.get('keywords')
        }
        if (searchParams.get('skills')) {
            params['skills'] = searchParams.getAll('skills')
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
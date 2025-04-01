import React, {useEffect} from "react";
import {useGetQuestionsQuery} from "@/entities/questions";
import QuestionsListWithPaginate from "@/pages/questions/ui/QuestionsListWithPaginate/QuestionsListWithPaginate.tsx";
import QuestionsFilters from "@/pages/questions/ui/QuestionsFilters/QuestionsFilters.tsx";
import './QuestionsPage.scss'
import {useGetSpecializationsQuery} from "@/entities/specializations";
import {useSearchParams} from "react-router-dom";

const QuestionsPage: React.FC = () => {
    const [searchParams] = useSearchParams()
    useGetSpecializationsQuery({})
    const {refetch} = useGetQuestionsQuery(defineParams())

    function defineParams() {
        const params: {
            specialization?: number
            keywords?: string | null
        } = {}
        if (searchParams.get('specialization')) {
            params['specialization'] = Number(searchParams.get('specialization'))
        }
        if (searchParams.get('keywords')) {
            params['keywords'] = searchParams.get('keywords')
        }
        return params
    }

    useEffect(() => {
        refetch()
    }, [searchParams])
    return (
        <div className="questions-page">
            <QuestionsListWithPaginate/>
            <QuestionsFilters/>
        </div>
    );
};

export default QuestionsPage;
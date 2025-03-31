import React, {useEffect, useState} from "react";
import {getQuestions, useGetQuestionsQuery} from "@/entities/questions";
// import {useDispatch, useSelector} from "react-redux";
import QuestionsListWithPaginate from "@/pages/questions/ui/QuestionsListWithPaginate/QuestionsListWithPaginate.tsx";
import QuestionsFilters from "@/pages/questions/ui/QuestionsFilters/QuestionsFilters.tsx";
import './QuestionsPage.scss'
import {useGetSpecializationsQuery} from "@/entities/specializations";
import {useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";

const QuestionsPage: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    useGetSpecializationsQuery()
    useGetQuestionsQuery({specialization: Number(searchParams.get('specialization'))})
    const dispatch = useDispatch()
    useEffect(() => {
        // if (searchParams.get('specialization')) {
        //     console.log(getQuestions,'get')
        //     dispatch(getQuestions({specialization: searchParams.get('specialization')}))
        // }
    }, [searchParams])
    // const dispatch = useDispatch();
    // const list = useSelector((state) => state.questions.questions)
    // const handleCl = () => {
    //     dispatch(addQuestion('sdf'))
    // }
    // useEffect(() => {
    // console.log('APITOKEN', import.meta.env.VITE_API_TOKEN)
    // })
    return (
        <div className="questions-page">
            <QuestionsListWithPaginate/>
            <QuestionsFilters/>
            {/*<button onClick={handleCl}>add</button>*/}
            {/*{list.map((question, index) => (*/}
            {/*    <div key={index} className="question">{question}</div>*/}
            {/*))}*/}
            {/*QuestionsPageQuestionsPageQuestionsPageQuestionsPage*/}
        </div>
    );
};

export default QuestionsPage;
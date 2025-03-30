import React from "react";
// import {addQuestion, useGetQuestionsQuery} from "@/entities/questions";
// import {useDispatch, useSelector} from "react-redux";
import QuestionsListWithPaginate from "@/pages/questions/ui/QuestionsListWithPaginate/QuestionsListWithPaginate.tsx";

const QuestionsPage: React.FC = () => {
    // useGetQuestionsQuery(1)
    // const dispatch = useDispatch();
    // const list = useSelector((state) => state.questions.questions)
    // const handleCl = () => {
    //     dispatch(addQuestion('sdf'))
    // }
    // useEffect(() => {
    // console.log('APITOKEN', import.meta.env.VITE_API_TOKEN)
    // })
    return (
        <div>
            <QuestionsListWithPaginate/>
            {/*<button onClick={handleCl}>add</button>*/}
            {/*{list.map((question, index) => (*/}
            {/*    <div key={index} className="question">{question}</div>*/}
            {/*))}*/}
            {/*QuestionsPageQuestionsPageQuestionsPageQuestionsPage*/}
        </div>
    );
};

export default QuestionsPage;
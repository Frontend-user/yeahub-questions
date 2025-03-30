import React from "react";
import {useGetQuestionsQuery} from "@/entities/questions";

const QuestionsPage: React.FC = () => {
    useGetQuestionsQuery(1)
    return (
        <div>
            QuestionsPageQuestionsPageQuestionsPageQuestionsPage
        </div>
    );
};

export default QuestionsPage;
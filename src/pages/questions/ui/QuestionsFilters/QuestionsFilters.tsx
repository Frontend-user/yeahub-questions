import React from 'react';
import './QuestionsFilters.scss'
import SearchQuestions from "@/feutures/questions/SearchQuestions/SearchQuestions.tsx";
import SelectSpecializations from "@/entities/specializations/ui/SelectSpecializations/SelectSpecializations.tsx";

const QuestionsFilters: React.FC = () => {

    return (
        <div className="questions-filters">
            <div className="questions-filters__inner">
                <SearchQuestions/>
                <SelectSpecializations/>
            </div>
        </div>
    );
};

export default QuestionsFilters;
import React from 'react';
import './QuestionsFilters.scss'
import SearchQuestions from "@/feutures/questions/SearchQuestions/SearchQuestions.tsx";
import SelectSpecializations from "@/feutures/specializations/ui/SelectSpecializations/SelectSpecializations.tsx";
import SelectSkills from "@/feutures/skills/ui/SelectSkills/SelectSkills.tsx";

const QuestionsFilters: React.FC = () => {

    return (
        <div className="questions-filters">
            <div className="questions-filters__inner">
                <SearchQuestions/>
                <div className="questions-filters__specialization">
                    <SelectSpecializations/>
                </div>
                <SelectSkills/>

            </div>
        </div>
    );
};

export default QuestionsFilters;
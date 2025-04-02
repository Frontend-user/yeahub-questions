import React from 'react';
import './QuestionsFilters.scss'
import SearchQuestions from "@/feutures/questions/SearchQuestions/SearchQuestions.tsx";
import SelectSpecializations from "@/feutures/specializations/ui/SelectSpecializations/SelectSpecializations.tsx";
import SelectSkills from "@/feutures/skills/ui/SelectSkills/SelectSkills.tsx";
import SelectComplexity from "@/feutures/complexity/ui/SelectComplexity/SelectComplexity.tsx";

const QuestionsFilters: React.FC = () => {

    return (
        <div className="questions-filters">
            <div className="questions-filters__inner">
                <SearchQuestions/>
                <div className="questions-filters__specialization">
                    <SelectSpecializations/>
                </div>
                <div className="questions-filters__specialization">
                <SelectSkills/>
                </div>
                <SelectComplexity/>

            </div>
        </div>
    );
};

export default QuestionsFilters;
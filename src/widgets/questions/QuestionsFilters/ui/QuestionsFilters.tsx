import './QuestionsFilters.scss'
import {SelectSpecializations} from "@/features/specializations/SelectSpecializations";
import {SelectSkills} from "@/features/skills/SelectSkills";
import {SelectRate} from "@/features/rate/SelectRate";
import {SelectComplexity} from "@/features/complexity/SelectComplexity";
import {SearchQuestions} from "@/features/questions/SearchQuestions";

export const QuestionsFilters = () => {

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
                <div className="questions-filters__specialization">
                    <SelectComplexity/>
                </div>
                <SelectRate/>
            </div>
        </div>
    );
};
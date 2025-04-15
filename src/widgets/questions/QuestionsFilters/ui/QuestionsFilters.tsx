import './QuestionsFilters.scss'
import SearchQuestions from "@/feutures/questions/ui/SearchQuestions/SearchQuestions";
import SelectSpecializations from "@/feutures/specializations/ui/SelectSpecializations/SelectSpecializations";
import SelectSkills from "@/feutures/skills/ui/SelectSkills/SelectSkills";
import SelectComplexity from "@/feutures/complexity/ui/SelectComplexity/SelectComplexity";
import SelectRate from "@/feutures/rate/ui/SelectRate/SelectRate";

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
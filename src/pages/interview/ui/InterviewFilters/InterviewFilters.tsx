import classes from "./InterviewFilters.module.scss";
import SelectSkills from "@/feutures/skills/ui/SelectSkills/SelectSkills.tsx";
import SelectComplexity from "@/feutures/complexity/ui/SelectComplexity/SelectComplexity.tsx";
import SetQuestionsCount from "@/feutures/interview/ui/SetQuestionsCount/SetQuestionsCount.tsx";

const InterviewFilters = () => {
    return (
        <div className={classes.interviewFilters}>
            <SelectSkills
                title="Выберите навыки"
                sliceCount={15}/>
            <div>
            <div className={classes.filtersWrapper}>
                <SelectComplexity/>

            </div>
             <SetQuestionsCount/>
            </div>
        </div>
    );
};

export default InterviewFilters;
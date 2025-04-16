import classes from "./InterviewFilters.module.scss";
import { SelectSkills } from "@/features/skills/SelectSkills";
import { SelectComplexity } from "@/features/complexity/SelectComplexity";
import { SetQuestionsCount } from "@/features/interview/SetQuestionsCount";

const InterviewFilters = () => {
  return (
    <div className={classes.interviewFilters}>
      <SelectSkills title="Выберите навыки" sliceCount={15} />
      <div>
        <div className={classes.filtersWrapper}>
          <SelectComplexity />
        </div>
        <SetQuestionsCount />
      </div>
    </div>
  );
};

export default InterviewFilters;

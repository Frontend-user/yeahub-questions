import "./QuestionsFilters.scss";
import { SelectSpecializations } from "@/features/specializations/SelectSpecializations";
import { SelectSkills } from "@/features/skills/SelectSkills";
import { SearchQuestions } from "@/features/questions/SearchQuestions";
import { SelectComplexity } from "@/features/questions/SelectComplexity";
import { SelectRate } from "@/features/questions/SelectRate";

export const QuestionsFilters = () => {
  return (
    <div className="questions-filters">
      <div className="questions-filters__inner">
        <SearchQuestions />
        <div className="questions-filters__specialization">
          <SelectSpecializations />
        </div>
        <div className="questions-filters__specialization">
          <SelectSkills />
        </div>
        <div className="questions-filters__specialization">
          <SelectComplexity />
        </div>
        <SelectRate />
      </div>
    </div>
  );
};

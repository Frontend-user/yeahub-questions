import { useGetSpecializationsQuery } from "@/entities/specializations";
import { useGetSkillsQuery } from "@/entities/skills";
import { FiltersSkeleton } from "@/widgets/questions/FiltersSkeleton";
import { QuestionsFilters } from "@/widgets/questions/QuestionsFilters";

const QuestionPageFilters = () => {
  const { isLoading: isSpecsLoading } = useGetSpecializationsQuery({});
  const { isLoading: isSkillsLoading } = useGetSkillsQuery({});

  const filterContent = () => {
    return isSpecsLoading || isSkillsLoading ? <FiltersSkeleton /> : <QuestionsFilters />;
  };

  return <div>{filterContent()}</div>;
};

export default QuestionPageFilters;

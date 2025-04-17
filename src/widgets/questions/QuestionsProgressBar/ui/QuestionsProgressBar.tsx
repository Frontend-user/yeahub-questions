import UiProgressBar from "@/shared/ui/UiProgressBar/UiProgressBar";
import { useAppSelector } from "@/shared/hooks/useAppSelector.ts";
import { getCurrentPage, getTotalPages } from "@/entities/interview-preparation";

export const QuestionsProgressBar = () => {
  const currentPage = useAppSelector(getCurrentPage);
  const totalPages = useAppSelector(getTotalPages);

  return (
    <div>
      <UiProgressBar
        title="Вопросы собеседования"
        allCount={totalPages}
        passedCount={currentPage}
      />
    </div>
  );
};

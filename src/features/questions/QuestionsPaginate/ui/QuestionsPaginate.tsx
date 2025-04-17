import "./QuestionsPaginate.scss";
import UiPaginate from "@/shared/ui/UiPaginate/ui/UiPaginate.tsx";
import { SetURLSearchParams, useSearchParams } from "react-router-dom";
import { useQuestionsPaginate } from "@/features/questions/QuestionsPaginate/hooks/useQuestionsPaginate.tsx";
import { getQuestionsPaginateParams, IQuestionsPaginateParams } from "@/entities/questions";
import { useAppSelector } from "@/shared/hooks/useAppSelector.ts";

export const QuestionsPaginate = () => {
  const questionsPaginateParams: IQuestionsPaginateParams = useAppSelector(getQuestionsPaginateParams)
  const [searchParams, setSearchParams]: [URLSearchParams, SetURLSearchParams] = useSearchParams();

  const [paginateParams, nextPage, selectPage, prevPage] = useQuestionsPaginate({
    questionsPaginateParams,
    searchParams,
    setSearchParams,
  });

  return (
    <div>
      {questionsPaginateParams && questionsPaginateParams.total && (
        <UiPaginate
          lastPage={paginateParams.lastPage}
          firstPage={paginateParams.firstPage}
          showPages={paginateParams.showPages}
          currentPage={paginateParams.currentPage}
          onHandleNextPage={nextPage}
          selectPage={selectPage}
          onHandlePrevPage={prevPage}
        />
      )}
    </div>
  );
};

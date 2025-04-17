import classes from "./InterviewPage.module.scss";
import { useGetSkillsQuery } from "@/entities/skills";
import { PAGES } from "@/shared/constats/constats.ts";
import InterviewFilters from "@/pages/interview/InterviewPage/ui/InterviewFilters/InterviewFilters.tsx";
import { useLazyGetMockQuizzesQuery } from "@/entities/interview-preparation";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getComplexityIdsByQuery } from "@/pages/interview/QuestionsPage/libs/helpers.ts";
import { GetMockQuizButton } from "@/features/interview/GetMockQuizButton";
import { PageRoutes } from "@/widgets/page-routes";
import { useAppSelector } from "@/shared/hooks/useAppSelector.ts";
import { getComplexityList } from "@/entities/questions";
interface IStaticParams {
  [key: string]: string | string[] | number[];
}
const InterviewPage = () => {
  const complexityList = useAppSelector(getComplexityList);

  const [trigger] = useLazyGetMockQuizzesQuery();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [params, setParams] = useState({});

  useEffect(() => {
    const queryKeys = Array.from(new Set(searchParams.keys()));
    const staticParams: IStaticParams = {};

    for (const queryKey of queryKeys) {
      if (searchParams.has(queryKey)) {
        const queryValues = searchParams.getAll(queryKey);

        if (queryKey === "complexity") {
          staticParams[queryKey] = getComplexityIdsByQuery(queryValues, complexityList);
        } else {
          staticParams[queryKey] = queryValues.length === 1 ? queryValues[0] : queryValues;
        }
      }
    }

    setParams(staticParams);
  }, [searchParams]);

  const getMockQuizzes = async () => {
    await trigger(params);
    navigate(`/${PAGES.MOCK_QUIZ}`);
  };

  useGetSkillsQuery({ limit: 15 });

  return (
    <div className={classes.interviewPage}>
      <div className={classes.routeWrap}>
        <PageRoutes />
      </div>
      <div className={classes.inner}>
        <div className={classes.title}>Собеседование</div>
        <InterviewFilters />
        <GetMockQuizButton onClick={getMockQuizzes} />
      </div>
    </div>
  );
};

export default InterviewPage;

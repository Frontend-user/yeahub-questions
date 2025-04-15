import classes from './InterviewPage.module.scss'
import {useGetSkillsQuery} from "@/entities/skills";
import UiRoutes from "@/shared/ui/UiRoutes/UiRoutes.tsx";
import {PAGES} from "@/shared/constats/constats.ts";
import GetMockQuizButton from "@/feutures/interview/ui/GetMockQuizButton/GetMockQuizButton.tsx";
import InterviewFilters from "@/pages/interview/InterviewPage/ui/InterviewFilters/InterviewFilters.tsx";
import {ISelectItem} from "@/shared/types/types.ts";
import {useLazyGetMockQuizzesQuery} from "@/entities/interview-preparation";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "@/app/AppStore.ts";
import {interviewRoutes} from "@/entities/interview-preparation/libs/constants.ts";
import {getComplexityIdsByQuery} from "@/pages/interview/QuestionsPage/libs/helpers.ts";


const InterviewPage = () => {
    const complexityList: ISelectItem[] = useSelector((state: AppStateType) => state.complexity.complexityList)
    const [trigger] = useLazyGetMockQuizzesQuery();
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const [params, setParams] = useState({})

    interface IStaticParams {
        [key: string]: string | string[] | number[]
    }

    useEffect(() => {
        const queryKeys = Array.from(new Set(searchParams.keys()))
        const staticParams: IStaticParams = {}
        for (const queryKey of queryKeys) {
            if (searchParams.has(queryKey)) {
                const queryValues = searchParams.getAll(queryKey)
                if (queryKey === 'complexity') {
                    staticParams[queryKey] = getComplexityIdsByQuery(queryValues, complexityList)
                } else {
                    staticParams[queryKey] = queryValues.length === 1 ? queryValues[0] : queryValues
                }
            }
        }
        setParams(staticParams)
    }, [searchParams]);
    const getMockQuizzes = async () => {
         await trigger(params);
        navigate(`/${PAGES.MOCK_QUIZ}`)
    }
   useGetSkillsQuery({limit: 15})
    return (
        <div className={classes.interviewPage}>
            <div className={classes.routeWrap}>
                <UiRoutes routes={interviewRoutes}/>
            </div>
            <div className={classes.inner}>

                <div className={classes.title}>Собеседование</div>
                <InterviewFilters/>
                <GetMockQuizButton onClick={getMockQuizzes}/>
            </div>
        </div>
    );
};

export default InterviewPage;
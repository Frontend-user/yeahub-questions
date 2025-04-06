import classes from './InterviewPage.module.scss'
import {useGetSkillsQuery} from "@/entities/skills";
import UiRoutes from "@/shared/ui/UiRoutes/UiRoutes.tsx";
import {PAGES} from "@/shared/constats/constats.ts";
import GetMockQuizButton from "@/feutures/interview/ui/GetMockQuizButton/GetMockQuizButton.tsx";
import InterviewFilters from "@/pages/interview/ui/InterviewFilters/InterviewFilters.tsx";
import {ISelectItem, UiRoute} from "@/shared/model/types/types.ts";
import {useLazyGetMockQuizzesQuery} from "@/entities/interview-preparation";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "@/app/AppStore.ts";
import {getComplexityIdsByQuery} from "@/pages/questions/libs/helpers.ts";


export const interviewRoutes: UiRoute[] = [
    {
        id: 1,
        name: 'Главная',
        to: `/${PAGES.QUESTIONS}`,
        isActive: false
    },
    {
        id: 2,
        to: `/${PAGES.INTERVIEW}`,
        name: 'Собеседование',
        isActive: true
    },
]
const InterviewPage = () => {
    const complexityList: ISelectItem[] = useSelector((state: AppStateType) => state.complexity.complexityList)
    const [trigger] = useLazyGetMockQuizzesQuery();
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const [params, setParams] = useState({})

    interface IStaticParams {
        [key: string]: string | string[]
    }

    useEffect(() => {
        let queryKeys = Array.from(new Set(searchParams.keys()))
        let staticParams: IStaticParams = {}
        for (let queryKey of queryKeys) {
            if (searchParams.has(queryKey)) {
                let queryValues = searchParams.getAll(queryKey)
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
        const {data} = await trigger(params);
        console.log(data, 'data')
        navigate(`/${PAGES.MOCK_QUIZ}`)
    }
    const {} = useGetSkillsQuery({limit: 15})
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
import {createBrowserRouter, RouteObject,} from "react-router-dom";
import BaseLayout from "@/app/layouts/BaseLayout.tsx";
import {lazy} from "react";

const LazyQuestionsPage = lazy(() => import('@/pages/questions/QuestionsPage.tsx'));
const LazyQuestionDetailsPage = lazy(() => import('@/pages/questions-details/QuestionDetailsPage.tsx'));
const LazyTrainerPage = lazy(() => import('@/pages/trainer/TrainerPage.tsx'));

const routes: RouteObject[] = [
    {
        path: "/",
        element: (
            <BaseLayout/>
        ),
        children: [
            {
                path: "/questions",
                element: <LazyQuestionsPage/>
            },
            {
                path: "/question-details/:questionId",
                element: <LazyQuestionDetailsPage/>
            },
            {
                path: "/trainer",
                element: <LazyTrainerPage/>
            }
        ]
    }
]
const appRouter = createBrowserRouter(routes)

export default appRouter;
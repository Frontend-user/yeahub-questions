import {createBrowserRouter, RouteObject,} from "react-router-dom";
import BaseLayout from "@/app/layouts/BaseLayout.tsx";
import {lazy} from "react";

const LazyQuestionsPage = lazy(() => import('@/pages/questions/QuestionsPage.tsx'));
const LazyQuestionDetailsPage = lazy(() => import('@/pages/QuestionDetailsPage/QuestionDetailsPage.tsx'));

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
            }
        ]
    }
]
const appRouter = createBrowserRouter(routes)

export default appRouter;
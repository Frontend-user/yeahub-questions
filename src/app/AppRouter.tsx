import {createBrowserRouter, Navigate, RouteObject} from "react-router-dom";
import BaseLayout from "@/app/layouts/BaseLayout.tsx";
import {PAGES} from "@/shared/constats/constats.ts";
import {QuestionsPage} from "@/pages/interview/QuestionsPage";
import {QuestionDetailsPage} from "@/pages/interview/QuestionDetailsPage";
import {PassedQuestionsPage} from "@/pages/interview/PassedQuestionsPage";
import {MockQuizPage} from "@/pages/interview/MockQuizPage";
import {InterviewPage} from "@/pages/interview/InterviewPage";
import MockQuizListEmptyMiddleware from "@/app/middlewares/MockQuizListEmptyMiddleware.tsx";



const routes: RouteObject[] = [
    {
        path: "/",
        element: (
            <BaseLayout/>
        ),
        children: [
            {
                path: `/${PAGES.QUESTIONS}`,
                element: <QuestionsPage/>
            },
            {
                path: `/${PAGES.QUESTION_ID}`,
                element: <QuestionDetailsPage/>
            },
            {
                path: `/${PAGES.INTERVIEW}`,
                element: <InterviewPage/>,
            },
            {
                path: `/${PAGES.MOCK_QUIZ}`,
                element:
                    <MockQuizListEmptyMiddleware>
                        <MockQuizPage/>
                    </MockQuizListEmptyMiddleware>
            },
            {
                path: `/${PAGES.PASSED_QUESTIONS}`,
                element: <PassedQuestionsPage/>
            }
        ]
    },
    {
        path: "*",
        element: <Navigate to={`/${PAGES.QUESTIONS}`} replace/>
    }
]
const appRouter = createBrowserRouter(routes)

export default appRouter;
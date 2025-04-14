import {createBrowserRouter, Navigate, RouteObject} from "react-router-dom";
import BaseLayout from "@/app/layouts/BaseLayout.tsx";
import {lazy} from "react";
import {PAGES} from "@/shared/constats/constats.ts";

const LazyQuestionsPage = lazy(() => import('@/pages/questions/QuestionsPage.tsx'));
const LazyQuestionDetailsPage = lazy(() => import('@/pages/questions-details/QuestionDetailsPage.tsx'));
const LazyInterviewPage = lazy(() => import('@/pages/interview/InterviewPage.tsx'));
const LazyMockQuizPage = lazy(() => import('@/pages/mock-quiz/MockQuizPage.tsx'));
const LazyPassedQuestions = lazy(() => import('@/pages/passed-questions/PassedQuestionsPage.module.tsx'));
const LazyRegistrationPage = lazy(() => import('@/pages/registration/RegistrationPage.tsx'));
import MockQuizListEmptyMiddleware from "@/app/middlewares/MockQuizListEmptyMiddleware.tsx";


const routes: RouteObject[] = [
    {
        path: "/",
        element: (
            <BaseLayout/>
        ),
        children: [
            {
                path: `/${PAGES.REGISTRATION}`,
                element: <LazyRegistrationPage/>
            },
            {
                path: `/${PAGES.QUESTIONS}`,
                element: <LazyQuestionsPage/>
            },
            {
                path: `/${PAGES.QUESTION_ID}`,
                element: <LazyQuestionDetailsPage/>
            },
            {
                path: `/${PAGES.INTERVIEW}`,
                element: <LazyInterviewPage/>,
            },
            {
                path: `/${PAGES.MOCK_QUIZ}`,
                element:
                    <MockQuizListEmptyMiddleware>
                        <LazyMockQuizPage/>
                    </MockQuizListEmptyMiddleware>
            },
            {
                path: `/${PAGES.PASSED_QUESTIONS}`,
                element: <LazyPassedQuestions/>
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
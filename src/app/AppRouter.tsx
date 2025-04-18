import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import MockQuizListEmptyMiddleware from "@/app/middlewares/MockQuizListEmptyMiddleware.tsx";
import { PAGES } from "@/shared/constats/constats.ts";
import BaseLayout from "@/app/layouts/BaseLayout.tsx";
import { QuestionsPage } from "@/pages/interview/QuestionsPage";
import { QuestionDetailsPage } from "@/pages/interview/QuestionDetailsPage";
import { PassedQuestionsPage } from "@/pages/interview/PassedQuestionsPage";
import { MockQuizPage } from "@/pages/interview/MockQuizPage";
import { InterviewPage } from "@/pages/interview/InterviewPage";
import { MainPage } from "@/pages/MainPage";
import { LoginPage } from "@/pages/auth/LoginPage";
import { RegistrationPage } from "@/pages/auth/RegistrationPage";
import AuthMiddleware from "@/app/middlewares/AuthMiddleware.tsx";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: (
          <AuthMiddleware>
            <MainPage />
          </AuthMiddleware>
        ),
      },
      {
        path: `/${PAGES.LOGIN}`,
        element: <LoginPage />,
      },
      {
        path: `/${PAGES.REGISTRATION}`,
        element: <RegistrationPage />,
      },
      {
        path: `/${PAGES.QUESTIONS}`,
        element: <QuestionsPage />,
      },
      {
        path: `/${PAGES.QUESTION_ID}`,
        element: <QuestionDetailsPage />,
      },
      {
        path: `/${PAGES.INTERVIEW}`,
        element: <InterviewPage />,
      },
      {
        path: `/${PAGES.MOCK_QUIZ}`,
        element: (
          <MockQuizListEmptyMiddleware>
            <MockQuizPage />
          </MockQuizListEmptyMiddleware>
        ),
      },
      {
        path: `/${PAGES.PASSED_QUESTIONS}`,
        element: (
          <MockQuizListEmptyMiddleware>
            <PassedQuestionsPage />
          </MockQuizListEmptyMiddleware>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={`/${PAGES.QUESTIONS}`} replace />,
  },
];
const appRouter = createBrowserRouter(routes);

export default appRouter;

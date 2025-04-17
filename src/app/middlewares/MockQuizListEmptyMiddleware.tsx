import { useSelector } from "react-redux";
import { AppStateType } from "@/app/AppStore.ts";
import { Navigate } from "react-router-dom";
import { PAGES } from "@/shared/constats/constats.ts";
import { ReactNode } from "react";

const MockQuizListEmptyMiddleware = ({ children }: { children: ReactNode }) => {
  const list = useSelector((state: AppStateType) => state.interviewPreparation.mockQuestionsList);
  if (!list.length) {
    return <Navigate to={`/${PAGES.QUESTIONS}`} replace />;
  }
  return <>{children}</>;
};

export default MockQuizListEmptyMiddleware;

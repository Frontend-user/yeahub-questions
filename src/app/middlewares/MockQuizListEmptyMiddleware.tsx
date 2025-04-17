import { Navigate } from "react-router-dom";
import { PAGES } from "@/shared/constats/constats.ts";
import { ReactNode } from "react";
import { useAppSelector } from "@/shared/hooks/useAppSelector.ts";
import { getMockQuestionList } from "@/entities/interview-preparation";

const MockQuizListEmptyMiddleware = ({ children }: { children: ReactNode }) => {
  const mockQuestionsList = useAppSelector(getMockQuestionList);
  if (!mockQuestionsList.length) {
    return <Navigate to={`/${PAGES.QUESTIONS}`} replace />;
  }
  return <>{children}</>;
};

export default MockQuizListEmptyMiddleware;

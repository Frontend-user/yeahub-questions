import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { PAGES } from "@/shared/constats/constats.ts";
import { ReactNode } from "react";
import { isUserAuthenticated } from "@/entities/auth";

const AuthMiddleware = ({ children }: { children: ReactNode }) => {
  const isAuth = useSelector(isUserAuthenticated);
  if (!isAuth) {
    return <Navigate to={`/${PAGES.LOGIN}`} replace />;
  }
  return <>{children}</>;
};

export default AuthMiddleware;

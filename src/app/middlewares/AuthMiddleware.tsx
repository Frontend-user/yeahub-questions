import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { PAGES } from "@/shared/constats/constats.ts";
import { ReactNode } from "react";
import { isUserAuthenticated } from "@/entities/auth";
import { PageLoadingSkeleton } from "@/widgets/loader/PageLoadingSkeleton";
import { defineExpiredTokenSettings } from "@/app/helpers/defineExpiredTokenSettings.ts";

const AuthMiddleware = ({ children }: { children: ReactNode }) => {
  const isAuth = useSelector(isUserAuthenticated);

  if (!isAuth) {
    return <Navigate to={`/${PAGES.LOGIN}`} replace />;
  }

  if (isAuth) {
    const { isTokenExpired } = defineExpiredTokenSettings();

    if (isTokenExpired.current) {
      return <PageLoadingSkeleton />;
    }
  }

  return <>{children}</>;
};

export default AuthMiddleware;

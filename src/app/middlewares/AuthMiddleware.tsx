import { Navigate } from "react-router-dom";
import { PAGES } from "@/shared/constats/constats.ts";
import { ReactNode } from "react";
import { PageLoadingSkeleton } from "@/widgets/loader/PageLoadingSkeleton";
import { defineExpiredTokenSettings } from "@/app/helpers/defineExpiredTokenSettings.ts";
import { useAppSelector } from "@/shared/hooks/useAppSelector.ts";
import { getIsUserAuthenticated } from "@/entities/auth";

const AuthMiddleware = ({ children }: { children: ReactNode }) => {
  const isAuth = useAppSelector(getIsUserAuthenticated);

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

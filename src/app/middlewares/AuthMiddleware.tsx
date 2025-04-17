import { Navigate } from "react-router-dom";
import { PAGES } from "@/shared/constats/constats.ts";
import { ReactNode } from "react";
import { PageLoadingSkeleton } from "@/widgets/loader/PageLoadingSkeleton";
import { useAppSelector } from "@/shared/hooks/useAppSelector.ts";
import { getIsUserAuthenticated } from "@/entities/auth";
import { useExpiredTokenSettings } from "@/app/helpers/defineExpiredTokenSettings.ts";

const AuthMiddleware = ({ children }: { children: ReactNode }) => {
  const isAuth = useAppSelector(getIsUserAuthenticated);
  const { isTokenExpired } = useExpiredTokenSettings();
  if (!isAuth) {
    return <Navigate to={`/${PAGES.LOGIN}`} replace />;
  }

  if (isAuth && isTokenExpired.current) {
    return <PageLoadingSkeleton />;
  }

  return <>{children}</>;
};

export default AuthMiddleware;

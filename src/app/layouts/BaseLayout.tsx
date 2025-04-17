import { Outlet } from "react-router-dom";
import "./BaseLayout.scss";
import { Header } from "@/widgets/header";
import { Suspense } from "react";
import { PageLoadingSkeleton } from "@/widgets/loader/PageLoadingSkeleton";
import { getCookie } from "@/shared/lib/utils/getCookie.ts";
import { setIsAuth } from "@/entities/auth";
import { useAppDispatch } from "@/shared/hooks/useAppSelector.ts";

function BaseLayout() {
  const isAuth = getCookie("isAuth");
  const dispatch = useAppDispatch();

  if (isAuth === "true") {
    dispatch(setIsAuth(true));
  } else {
    dispatch(setIsAuth(false));
  }

  return (
    <div className="base-layout">
      <Header />
      <div className="base-layout__wrapper wrapper">
        <Suspense fallback={<PageLoadingSkeleton />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

export default BaseLayout;

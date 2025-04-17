import { Outlet } from "react-router-dom";
import "./BaseLayout.scss";
import { Header } from "@/widgets/header";
import { Suspense } from "react";
import { PageLoadingSkeleton } from "@/widgets/loader/PageLoadingSkeleton";
import { getCookie } from "@/shared/lib/utils/getCookie.ts";
import { useDispatch } from "react-redux";
import { setIsAuth } from "@/entities/auth";

function BaseLayout() {
  const dispatch = useDispatch();
  const isAuth = getCookie("isAuth");
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

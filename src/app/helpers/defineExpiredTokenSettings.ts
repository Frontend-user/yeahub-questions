import { useRef } from "react";
import { getTokenExpiredSecsLeft } from "@/shared/lib/helpers/helpers.ts";
import { getCookie } from "@/shared/lib/utils/getCookie.ts";
import { AUTHORIZATION, PAGES } from "@/shared/constats/constats.ts";
import { setIsAuth, useLazyRefreshQuery } from "@/entities/auth";
import { saveCookie } from "@/shared/lib/utils/saveCookie.ts";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/shared/hooks/useAppSelector.ts";

export const useExpiredTokenSettings = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const didRun = useRef(false);
  const isTokenExpired = useRef(false);

  const [trigger, result] = useLazyRefreshQuery();
  const { data, isSuccess, isError } = result;

  const timeToExpiredToken = getTokenExpiredSecsLeft(getCookie(AUTHORIZATION));
  isTokenExpired.current = timeToExpiredToken < 0;

  if (isTokenExpired.current) {
    if (!didRun.current) {
      didRun.current = true;
      trigger({});
    }

    if (isError) {
      saveCookie("isAuth", "false");
      dispatch(setIsAuth(false));
      navigate(`/${PAGES.LOGIN}`);
    }

    if (isSuccess) {
      const newToken = `Bearer ${data.access_token}`;
      saveCookie(AUTHORIZATION, newToken);
      isTokenExpired.current = false;
    }
  }

  return { isTokenExpired };
};

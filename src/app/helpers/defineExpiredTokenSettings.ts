import { useRef } from "react";
import { getTokenExpiredSecsLeft } from "@/shared/lib/helpers/helpers.ts";
import { getCookie } from "@/shared/lib/utils/getCookie.ts";
import { AUTHORIZATION, PAGES } from "@/shared/constats/constats.ts";
import { useLazyRefreshQuery } from "@/entities/auth";
import { saveCookie } from "@/shared/lib/utils/saveCookie.ts";
import { useNavigate } from "react-router-dom";

export const defineExpiredTokenSettings = () => {
  const navigate = useNavigate();

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

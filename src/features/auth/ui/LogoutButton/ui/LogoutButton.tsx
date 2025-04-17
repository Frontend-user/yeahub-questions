import { saveCookie } from "@/shared/lib/utils/saveCookie.ts";
import { NavLink } from "react-router-dom";
import { PAGES } from "@/shared/constats/constats.ts";
import UiButton from "@/shared/ui/UiButton/UiButton.tsx";
import { useDispatch } from "react-redux";
import { setIsAuth } from "@/entities/auth";
import { useLazyLogoutQuery } from "@/entities/auth/api/authApi.ts";

export const LogoutButton = () => {
  const dispatch = useDispatch();
  const [trigger] = useLazyLogoutQuery();

  const deleteAccessToken = () => {
    trigger();
    saveCookie("Authorization", "");
    saveCookie("isAuth", "false");
    dispatch(setIsAuth(false));
  };

  return (
    <NavLink onClick={deleteAccessToken} to={`/${PAGES.LOGIN}`} className="header__nav-item">
      <UiButton>Выйти</UiButton>
    </NavLink>
  );
};

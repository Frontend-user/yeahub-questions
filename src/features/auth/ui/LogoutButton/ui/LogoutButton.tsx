import { saveCookie } from "@/shared/lib/utils/saveCookie.ts";
import { NavLink } from "react-router-dom";
import { PAGES } from "@/shared/constats/constats.ts";
import UiButton from "@/shared/ui/UiButton/UiButton.tsx";
import { setIsAuth } from "@/entities/auth";
import { useLazyLogoutQuery } from "@/entities/auth/api/authApi.ts";
import { useAppDispatch } from "@/shared/hooks/useAppSelector.ts";

export const LogoutButton = () => {
  const [trigger] = useLazyLogoutQuery();
  const dispatch = useAppDispatch();

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

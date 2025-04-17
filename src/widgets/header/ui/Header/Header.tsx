import "./Header.scss";
import yeahubIcon from "icons/yeahub-icon.svg";
import { NavLink, useSearchParams } from "react-router-dom";
import UiImage from "@/shared/ui/UiImage/UiImage.tsx";
import { PAGES } from "@/shared/constats/constats.ts";
import UiButton from "@/shared/ui/UiButton/UiButton.tsx";
import { isUserAuthenticated } from "@/entities/auth";
import { useSelector } from "react-redux";
import { LogoutButton } from "@/features/auth/ui/LogoutButton";

const Header = () => {
  const [, setSearchParams] = useSearchParams();
  const resetQueries = () => {
    setSearchParams({});
  };

  const isUserAuthenticatedSelector = useSelector(isUserAuthenticated);
  return (
    <div className="header">
      <div className="header__inner wrapper">
        <div className="header__left">
          <NavLink to={PAGES.MAIN_PAGE}>
            <UiImage src={yeahubIcon} alt="" className="header__icon" />
          </NavLink>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <NavLink to={PAGES.QUESTIONS} className="header__nav-item">
                  База вопросов
                </NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink to={PAGES.INTERVIEW} className="header__nav-item">
                  Собеседование
                </NavLink>
              </li>
              <li className="header__nav-item">
                <div onClick={resetQueries} className="header__nav-item">
                  Очистить
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div></div>
        <div className="header__auth">
          {isUserAuthenticatedSelector ? (
            <LogoutButton />
          ) : (
            <>
              <NavLink to={`/${PAGES.LOGIN}`} className="header__nav-item">
                <UiButton type="secondary">Вход</UiButton>
              </NavLink>
              <NavLink to={PAGES.REGISTRATION} className="header__nav-item">
                <UiButton>Регистрация</UiButton>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export { Header };

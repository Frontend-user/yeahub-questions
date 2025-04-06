import './Header.scss'
import UiButton from "@/shared/ui/UiButton/UiButton.tsx";
import yeahubIcon from "icons/yeahub-icon.svg"
import {NavLink, useSearchParams} from "react-router-dom";
import UiImage from "@/shared/ui/UiImage/UiImage.tsx";
import {PAGES} from "@/shared/constats/constats.ts";

const Header = () => {
    const [, setSearchParams] = useSearchParams()
    const resetQueries = () => {
        setSearchParams({})
    }
    return (
        <div className="header">
            <div className="header__inner wrapper">
                <div className="header__left">
                    <NavLink to={PAGES.QUESTIONS}>
                        <UiImage src={yeahubIcon} alt="" className="header__icon"/>
                    </NavLink>
                    <div className="header__nav">
                        <NavLink to={PAGES.QUESTIONS} className="header__nav-item">База вопросов</NavLink>
                        <NavLink to={PAGES.INTERVIEW} className="header__nav-item">Собеседование</NavLink>
                        <div onClick={resetQueries} className="header__nav-item">Очистить</div>
                    </div>
                </div>
                <div></div>
                <div className="header__auth">
                    <UiButton text="Вход" type="secondary"/>
                    <UiButton text="Регистрация"/>
                </div>
            </div>
        </div>
    );
};

export default Header
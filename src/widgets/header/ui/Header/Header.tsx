import './Header.scss'
import UiButton from "@/widgets/header/ui/UiButton/UiButton.tsx";
import yeahubIcon from "icons/yeahub-icon.svg"
import {useSearchParams} from "react-router-dom";

const Header = () => {
    const [_, setSearchParams] = useSearchParams()
    const resetQueries = () => {
        setSearchParams({})
    }
    return (
        <div className="header">
            <div className="header__inner wrapper">
                <div className="header__left">
                    <img src={yeahubIcon} alt="" className="header__icon"/>
                    <div className="header__nav">
                        <div className="header__nav-item">База вопросов</div>
                        <div className="header__nav-item" onClick={resetQueries}>Тренажер</div>
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
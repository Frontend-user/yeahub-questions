import './Header.scss'
import UiButton from "@/widgets/header/ui/UiButton/UiButton.tsx";
import yeahubIcon from "icons/yeahub-icon.svg"
import {useNavigate, useSearchParams} from "react-router-dom";
import UiImage from "@/shared/ui/UiImage/UiImage.tsx";

const Header = () => {
    const [, setSearchParams] = useSearchParams()
    const resetQueries = () => {
        setSearchParams({})
    }
    const navigate = useNavigate()
    const goToQuestions = () => {
        navigate('/questions')
    }
    return (
        <div className="header">
            <div className="header__inner wrapper">
                <div className="header__left">
                    <UiImage onClick={goToQuestions} src={yeahubIcon} alt="" className="header__icon"/>
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
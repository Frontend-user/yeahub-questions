import './QuestionsCard.scss'
import parse from 'html-react-parser';

import downIcon from "icons/down-icon.svg"
import upIcon from "icons/up-icon.svg"
import UiButton from "@/shared/ui/UiButton/UiButton.tsx";
import UiTag from "@/shared/ui/UiTag/UiTag.tsx";
import {NavLink} from "react-router-dom";
import UiImage from "@/shared/ui/UiImage/UiImage.tsx";
import {useToggle} from "@/shared/hooks/useToggle.tsx";

type QuestionsCardProps = {
    id: number;
    title: string;
    shortAnswer: string;
    rate?: string | number
    complexity?: string | number
}
export const QuestionsCard = ({
                                  id,
                                  rate, complexity,
                                  title,
                                  shortAnswer
                              }: QuestionsCardProps) => {
    const [isToggled, toggle] = useToggle();

    return (
        <div key={id} className="questions-card">
            <div className="questions-card__head" onClick={toggle}>
                <div className="questions-card__custom-icon"></div>
                <div className="questions-card__title">{title}</div>
                <UiImage
                    src={isToggled ? upIcon : downIcon}
                    className={`questions-card__drop-down-button`}/>
            </div>
            <div
                className={isToggled
                    ? "questions-card__shortAnswer questions-card__shortAnswer_open"
                    : "questions-card__shortAnswer "}>

                <div>{shortAnswer ? (
                    <div>
                        <div className="questions-card__ui-tags-wrapper">
                            {rate && <UiTag label="Рейтинг" value={rate}/>}
                            {complexity && <UiTag label="Сложность" value={complexity}/>}
                        </div>

                        {parse(shortAnswer)}

                    </div>
                ) : ''}
                    <NavLink className="questions-card__link" to={`/question-details/${id}`}>
                        <UiButton
                            className="questions-card__read-more-button"
                            text="Подробнее"
                            type="arrow-right"
                        />

                    </NavLink>
                </div>
            </div>
        </div>
    );
};
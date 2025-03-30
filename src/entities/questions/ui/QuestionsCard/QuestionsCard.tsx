import React, {useState} from "react";
import './QuestionsCard.scss'
import parse from 'html-react-parser';

type QuestionsCardProps = {
    id: number;
    title: string;
    shortAnswer: string;
}
import downIcon from "icons/down-icon.svg"
import UiButton from "@/widgets/header/ui/UiButton/UiButton.tsx";

const QuestionsCard:
    React.FC<QuestionsCardProps> = ({
                                        id,
                                        title,
                                        shortAnswer
                                    }) => {
    const [showCard, setShowCard] = useState<boolean>(false);
    const onHandleClick = () => {
        setShowCard(!showCard);
    }
    return (
        <div key={id} className="questions-card">
            <div className="questions-card__head" onClick={onHandleClick}>
                <div className="questions-card__custom-icon"></div>
                <div className="questions-card__title">{title}</div>
                <img src={downIcon} className="questions-card__drop-down-button"/>
            </div>
            <div
                className={showCard
                    ? "questions-card__shortAnswer questions-card__shortAnswer_open"
                    : "questions-card__shortAnswer "}>
                <div>{parse(shortAnswer)}

                    <UiButton
                        className="questions-card__read-more-button"
                        text="Подробнее"
                        type="arrow-right"
                    />
                </div>
            </div>
        </div>
    );
};

export default QuestionsCard;
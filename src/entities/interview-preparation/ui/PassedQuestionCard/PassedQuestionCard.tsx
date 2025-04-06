import classes from './PassedQuestionCard.module.scss'
import UiButton from "@/shared/ui/UiButton/UiButton.tsx";
import parse from "html-react-parser";
import passedQuestionImage from 'images/static-passed-question-image.svg'

const {info, image, title, block, inner, imageWrapper, statusButton} = classes

interface IPassedQuestionCardProps {
    id: number;
    imageSrc?: string;
    question: string;
    isUserKnow: boolean
}

const PassedQuestionCard = ({ imageSrc, question = "", isUserKnow}: IPassedQuestionCardProps) => {

    return (
        <div className={block}>
            <div className={inner}>
                <div className={imageWrapper}>
                    <img className={image} src={imageSrc || passedQuestionImage} alt=""/>
                </div>
                <div className={info}>
                    <div className={title}>{parse(question)}</div>
                    {isUserKnow ? <UiButton className={statusButton} type="like">Я
                            знаю</UiButton>
                        : <UiButton className={statusButton}
                                    type="dislike">Незнаю</UiButton>}
                </div>
            </div>

        </div>
    );
};

export default PassedQuestionCard;
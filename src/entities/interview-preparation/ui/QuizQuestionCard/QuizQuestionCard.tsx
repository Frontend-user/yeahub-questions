import classes from './QuizQuestionCard.module.scss'
import UiButton from "@/shared/ui/UiButton/UiButton.tsx";
import parse from "html-react-parser";
import {IQuizQuestionCardProps} from "@/entities/interview-preparation/model/types.ts";
import quizImage from "@/shared/assets/images/quiz-img.png";

const QuizQuestionCard = ({
                              title, showAnswer,
                              shortAnswer,
                              toggleShowAnswerButton,
                              children:slots
                          }: IQuizQuestionCardProps) => {
    return (
        <div className={classes.block}>
            <div className={classes.inner}>
                <div className={classes.buttonsWrapper}>
                    {slots?.navButtonsRender}
                </div>
                <div className={classes.content}>
                    <div className={classes.info}>

                        <div className={classes.title}>{title}</div>

                        <UiButton
                            className={showAnswer ? classes.hideShowAnswerButton : classes.showAnswerButton}
                            onClick={toggleShowAnswerButton}
                            type={showAnswer ? `select_open` : `select`}
                            text={showAnswer ? 'Скрыть' : 'Посмотреть ответ'}/>
                        {
                            showAnswer ?
                                (

                                    <div className={classes.shortAnswerBlock}>{parse(shortAnswer)}</div>
                                ) :
                                (<div></div>)
                        }

                        <div className={classes.likeButtonsWrap}>
                            {slots?.changeUserKnowButtonsRender}
                        </div>
                    </div>
                    <img src={quizImage} className={classes.image} alt=""/>

                </div>
                <div className={classes.endButtonWrap}>

                    {slots?.cancelButtonRender}
                </div>
            </div>
        </div>
    );
};

export {QuizQuestionCard};
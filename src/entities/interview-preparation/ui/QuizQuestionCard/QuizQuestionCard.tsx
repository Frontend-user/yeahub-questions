import classes from './QuizQuestionCard.module.scss'
import UiButton from "@/shared/ui/UiButton/UiButton.tsx";
import parse from "html-react-parser";

const QuizQuestionCard = ({
                              prevButton, nextButton, cancelButton,
                              knowButton, dontKnowButton, quizStaticImage,
                              id, isUserKnow,
                              title, showAnswer,
                              shortAnswer,
                              toggleShowAnswerButton,
                          }) => {
    return (
        <div className={classes.block}>
            <div className={classes.inner}>
                <div className={classes.buttonsWrapper}>
                    {prevButton}
                    {nextButton}
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
                            {knowButton}
                            {dontKnowButton}
                        </div>
                    </div>
                    {quizStaticImage}
                </div>
                <div className={classes.endButtonWrap}>

                    {cancelButton}
                </div>
            </div>
        </div>
    );
};

export default QuizQuestionCard;
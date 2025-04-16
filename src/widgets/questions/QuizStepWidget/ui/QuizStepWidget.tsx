import {QuizQuestionInfo} from "@/entities/interview-preparation";
import UiButton from "@/shared/ui/UiButton/UiButton.tsx";
import {useSelector} from "react-redux";
import {PAGES} from "@/shared/constats/constats";
import {NavLink} from "react-router-dom";
import classes from './QuizStepWidget.module.scss'
import {AppStateType} from "@/app/AppStore";
import {MockQuestionUserKnowButtons} from "@/features/interview/MockQuestionUserKnowButtons";
import {MockQuizCardNavButtons} from "@/features/interview/MockQuizCardNavButtons";
import {useToggle} from "@/shared/hooks/useToggle.tsx";

export const QuizStepWidget = () => {
    const currentQuestion = useSelector((state: AppStateType) => state.interviewPreparation.currentMockQuestion)
    const [showAnswer, toggle] = useToggle()

    const changeUserKnowButtonsRender = () => <MockQuestionUserKnowButtons
        isUserKnow={currentQuestion.isUserKnow}
        id={currentQuestion.id}
    />

    const mockQuizCardNavButtonsRender = () => <MockQuizCardNavButtons
        toggleShowAnswerButton={() => toggle()}
        showAnswer={showAnswer}
        nextQuestionId={currentQuestion.nextQuestionId}
        prevQuestionId={currentQuestion.prevQuestionId}
    />

    const cancelButtonRender = ()=>
     <NavLink className={classes.link} to={`/${PAGES.PASSED_QUESTIONS}`}>
        <UiButton type="danger">Завершить</UiButton>
    </NavLink>

    return (
        <div>
            <div className={classes.wrapper}>
                <div className={classes.inner}>
                    <div className={classes.buttonsWrapper}>
                        {mockQuizCardNavButtonsRender()}
                    </div>
                    <QuizQuestionInfo
                        title={currentQuestion.title}
                        shortAnswer={currentQuestion.shortAnswer}
                        toggleShowAnswerButton={() => toggle()}
                        showAnswer={showAnswer}
                        changeUserKnowButtonsRender={changeUserKnowButtonsRender()}
                    />
                    <div className={classes.endButtonWrap}>
                        {cancelButtonRender()}
                    </div>
                </div>
            </div>
        </div>
    )
}
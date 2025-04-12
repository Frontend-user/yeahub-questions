import {QuizQuestionCard} from "@/entities/interview-preparation";
import UiButton from "@/shared/ui/UiButton/UiButton.tsx";
import {useDispatch, useSelector} from "react-redux";
import quizImage from '@/shared/assets/images/quiz-img.png'
import classes from './QuizStepWidget.module.scss'
import {
    changeUserKnowStatus,
    nextPageAction, prevPageAction,
    selectCurrentMockQuestion
} from "@/entities/interview-preparation/model/interviewPreparationSlice.ts";
import {useToggle} from "@/shared/hooks/useToggle.tsx";
import {PAGES} from "@/shared/constats/constats.ts";
import {useNavigate} from "react-router-dom";
import {AppStateType} from "@/app/AppStore.ts";

const QuizStepWidget = () => {
    const currentPage = useSelector((state: AppStateType) => state.interviewPreparation.currentPage)
    const totalPages = useSelector((state: AppStateType) => state.interviewPreparation.totalPages)
    const currentQuestion = useSelector((state: AppStateType) => state.interviewPreparation.currentMockQuestion)
    const [showAnswer, toggle] = useToggle()
    const toggleShowAnswerButton = () => {
        toggle()
    }
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const nextPage = () => {
        if (showAnswer) {
            toggleShowAnswerButton()
        }
        if (currentPage + 1 > totalPages) {
            return
        }
        dispatch(nextPageAction())
        if (currentQuestion.nextQuestionId) {
            dispatch(selectCurrentMockQuestion(currentQuestion.nextQuestionId))
        }
    }
    const prevPage = () => {
        if (currentPage - 1 < 1) {
            return
        }
        if (showAnswer) {
            toggleShowAnswerButton()
        }
        dispatch(prevPageAction())
        if (currentQuestion.prevQuestionId) {
            dispatch(selectCurrentMockQuestion(currentQuestion.prevQuestionId))
        }
    }
    const completeQuiz = () => {
        navigate(`/${PAGES.PASSED_QUESTIONS}`)
    }
    const setMockQuestionUserDontKnow = (id: number) => {
        dispatch(changeUserKnowStatus({
            id,
            value: false
        }))
    }
    const setMockQuestionUserKnow = (id: number) => {
        dispatch(changeUserKnowStatus({
            id,
            value: true
        }))
    }
    return (
        <div>
            <QuizQuestionCard
                title={currentQuestion.title}
                shortAnswer={currentQuestion.shortAnswer}
                toggleShowAnswerButton={toggleShowAnswerButton}
                showAnswer={showAnswer}
                knowButton={
                    <UiButton onClick={() => setMockQuestionUserKnow(currentQuestion.id)}
                              className={`${currentQuestion.isUserKnow && 'ui-button__like_active'}`}
                              type="like">Я знаю</UiButton>
                }
                dontKnowButton={
                    <UiButton onClick={() => setMockQuestionUserDontKnow(currentQuestion.id)}
                              className={`${!currentQuestion.isUserKnow && 'ui-button__dislike_active'}`}
                              type="dislike">Не
                        знаю</UiButton>
                }
                cancelButton={
                    <UiButton type="danger" onClick={completeQuiz}>Завершить</UiButton>
                }
                quizStaticImage={
                    <img src={quizImage} className={classes.image} alt=""/>
                }
                prevButton={
                    <UiButton onClick={prevPage} type="arrow-left">Назад</UiButton>
                }
                nextButton={
                    (totalPages === currentPage ? <></> : (
                        <UiButton onClick={nextPage} type="arrow-right">Далее</UiButton>

                    ))
                }/>
        </div>
    );
};

export default QuizStepWidget;
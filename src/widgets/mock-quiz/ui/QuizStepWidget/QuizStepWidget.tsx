import QuizQuestionCard from "@/entities/interview-preparation/ui/QuizQuestionCard/QuizQuestionCard.tsx";
import UiButton from "@/shared/ui/UiButton/UiButton.tsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useLazyGetMockQuizzesQuery} from "@/entities/interview-preparation";
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

const QuizStepWidget = () => {
    const currentPage = useSelector((state) => state.interviewPreparation.currentPage)
    const totalPages = useSelector((state) => state.interviewPreparation.totalPages)
    const [trigger] = useLazyGetMockQuizzesQuery();
    const [showAnswer, toggle] = useToggle()
    const toggleShowAnswerButton = () => {
        toggle()
    }
    useEffect(() => {
        // trigger({})
    }, []);
    const navigate = useNavigate()
    const currentQuestion = useSelector((state) => state.interviewPreparation.currentMockQuestion)
    const dispatch = useDispatch()
    const nextPage = () => {
        if (showAnswer) {
            toggleShowAnswerButton()
        }
        if (currentPage + 1 > totalPages) {
            return
        }
        dispatch(nextPageAction())
        dispatch(selectCurrentMockQuestion(currentQuestion.nextQuestionId))
    }
    const prevPage = () => {
        if (currentPage - 1 < 1) {
            return
        }
        if (showAnswer) {
            toggleShowAnswerButton()
        }
        dispatch(prevPageAction())
        dispatch(selectCurrentMockQuestion(currentQuestion.prevQuestionId))
    }
    const completeQuiz = () => {
        navigate(`/${PAGES.PASSED_QUESTIONS}`)
    }
    const setMockQuestionUserDontKnow = (id) => {
        dispatch(changeUserKnowStatus({
            id,
            value: false
        }))
    }
    const setMockQuestionUserKnow = (id) => {
        dispatch(changeUserKnowStatus({
            id,
            value: true
        }))
    }
    return (
        <div>
            <QuizQuestionCard
                id={currentQuestion.id}
                title={currentQuestion.title}
                shortAnswer={currentQuestion.shortAnswer}
                toggleShowAnswerButton={toggleShowAnswerButton}
                showAnswer={showAnswer}
                isUserKnow={currentQuestion.isUserKnow}
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
                    <UiButton onClick={nextPage} type="arrow-right">Далее</UiButton>
                }/>
        </div>
    );
};

export default QuizStepWidget;
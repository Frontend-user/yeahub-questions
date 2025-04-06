import classes from './PassedQuestionsList.module.scss'
import PassedQuestionCard from "@/entities/interview-preparation/ui/PassedQuestionCard/PassedQuestionCard.tsx";
import UiButton from "@/shared/ui/UiButton/UiButton.tsx";
import {useDispatch, useSelector} from "react-redux";
import {useLazyGetMockQuizzesQuery} from "@/entities/interview-preparation";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {PAGES} from "@/shared/constats/constats.ts";
import {resetMockPassage} from "@/entities/interview-preparation/model/interviewPreparationSlice.ts";


const PassedQuestionsList = () => {
    const [trigger] = useLazyGetMockQuizzesQuery();

    // for (let i = 0; i < 10; i++) {
    //     list.push({
    //         id: i + 1,
    //         title: 'lorem1fsdleromlorem1fsdleromlorem1fsdleromlorem1fsdlerom',
    //         shortAnswer: "lorem1florem1fsdleromlorem1fsdleromlorem1fsdleromlorem1fsdleromlorem1fsdleromlorem1fsdleromlorem1fsdleromlorem1fsdleromsdleromlorem1fsdleromlorem1fsdleromlorem1fsdlerom",
    //         nextQuestionId: null,
    //         prevQuestionId: null,
    //         isUserKnow:  Math.round(Math.random() * 10) > 5
    //     })
    // }
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        // trigger()
    }, []);
    const list = useSelector((state) => state.interviewPreparation.mockQuestionsList)
    const trySameQuestions = () => {
        dispatch(resetMockPassage())
        navigate(`/${PAGES.MOCK_QUIZ}`)
    }
    return (
        <div className={classes.block}>
            <div className={classes.inner}>
                <div className={classes.title}>Список пройденных вопросов собеседования</div>
                <div className={classes.listWrap}>
                    {list.map((item) => (
                        <PassedQuestionCard id={item.id} question={item.title} key={item.id} isUserKnow={item.isUserKnow}/>
                    ))}
                </div>
                <UiButton onClick={trySameQuestions} className={classes.resetButton}>Пройти заново</UiButton>
            </div>
        </div>
    );
};

export default PassedQuestionsList;
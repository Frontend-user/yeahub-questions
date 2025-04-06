import UiRoutes from "@/shared/ui/UiRoutes/UiRoutes.tsx";
import {UiRoute} from "@/shared/model/types/types.ts";
import {PAGES} from "@/shared/constats/constats.ts";
import QuestionsProgressBar from "@/widgets/mock-quiz/ui/QuestionsProgressBar/QuestionsProgressBar.tsx";
import QuizQuestionCard from "@/entities/interview-preparation/ui/QuizQuestionCard/QuizQuestionCard.tsx";
import QuizStepWidget from "@/widgets/mock-quiz/ui/QuizStepWidget/QuizStepWidget.tsx";
import {useSelector} from "react-redux";

const mockQuizRoutes: UiRoute[] = [
    {
        id: 1,
        name: 'Главная',
        to: `/${PAGES.QUESTIONS}`,
        isActive: false
    },
    {
        id: 2,
        to: `/${PAGES.INTERVIEW}`,
        name: 'Собеседование',
        isActive: false
    },
    {
        id: 3,
        to: `/${PAGES.MOCK_QUIZ}`,
        name: 'Квиз',
        isActive: true
    },
]

const MockQuizPage = () => {
    return (
        <div>
            <div style={{display: 'none'}}>v-show</div>
            <br/>
            <UiRoutes routes={mockQuizRoutes}/>
            <br/>
            <br/>
            <QuestionsProgressBar/>
            <QuizStepWidget/>
        </div>
    );
};

export default MockQuizPage;
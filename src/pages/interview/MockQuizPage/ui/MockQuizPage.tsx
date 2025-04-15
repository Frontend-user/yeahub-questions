import UiRoutes from "@/shared/ui/UiRoutes/UiRoutes.tsx";
import {UiRoute} from "@/shared/types/types.ts";
import {PAGES} from "@/shared/constats/constats.ts";
import {QuizStepWidget} from "@/widgets/questions/QuizStepWidget";
import {QuestionsProgressBar} from "@/widgets/questions/QuestionsProgressBar";

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
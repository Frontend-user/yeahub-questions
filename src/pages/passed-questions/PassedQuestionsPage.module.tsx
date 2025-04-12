import classes from './PassedQuestionsPage.module.scss'
import {UiRoute} from "@/shared/model/types/types.ts";
import {PAGES} from "@/shared/constats/constats.ts";
import UiRoutes from "@/shared/ui/UiRoutes/UiRoutes.tsx";
import {PassedQuestionsList} from "@/entities/interview-preparation";
const passedQuestionsRoutes: UiRoute[] = [
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
        to: `/${PAGES.PASSED_QUESTIONS}`,
        name: 'Список пройденных вопросов',
        isActive: true
    },
]

const PassedQuestionsPage = () => {
    return (
        <div className={classes.block}>
            <div className={classes.routesWrapper}>
                <UiRoutes  routes={passedQuestionsRoutes}/>
            </div>
            <PassedQuestionsList/>
        </div>
    );
};

export default PassedQuestionsPage;
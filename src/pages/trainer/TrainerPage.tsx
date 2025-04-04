import classes from './TrainerPage.module.scss'
import {useGetSkillsQuery} from "@/entities/skills";
import TrainerFilters from "@/pages/trainer/ui/TrainerFilters/TrainerFilters.tsx";
import UiRoutes from "@/shared/ui/UiRoutes/UiRoutes.tsx";
import {PAGES} from "@/shared/constats/constats.ts";

interface UiRoute {
    id: number;
    name: string;
    to: string;
    isActive: boolean
}


export const trainerRoutes: UiRoute[] = [
    {
        id: 1,
        name: 'Главная',
        to: `/${PAGES.QUESTIONS}`,
        isActive: false
    },
    {
        id: 2,
        to: `/${PAGES.TRAINER}`,
        name: 'Тренажёр',
        isActive: true
    },
]
const TrainerPage = () => {
    const {} = useGetSkillsQuery({limit: 15})
    return (
        <div className={classes.trainerPage}>
            <div className={classes.routeWrap}>
                <UiRoutes routes={trainerRoutes}/>
            </div>
            <div className={classes.inner}>

                <div className={classes.title}>Собеседование</div>
                <TrainerFilters/>
            </div>
        </div>
    );
};

export default TrainerPage;
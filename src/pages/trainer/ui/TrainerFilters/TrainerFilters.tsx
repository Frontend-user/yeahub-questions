import classes from "./TrainerFilters.module.scss";
import SelectSkills from "@/feutures/skills/ui/SelectSkills/SelectSkills.tsx";
import SelectComplexity from "@/feutures/complexity/ui/SelectComplexity/SelectComplexity.tsx";
import UiCounter from "@/shared/ui/UiCounter/UiCounter.tsx";

const TrainerFilters = () => {
    return (
        <div className={classes.trainerFilters}>
            <SelectSkills
                title="Выберите навыки"
                sliceCount={15}/>
            <div>
                <SelectComplexity/>
                <UiCounter value={34} label="Количество вопросов" increment={undefined} decrement={undefined}/>
            </div>
        </div>
    );
};

export default TrainerFilters;
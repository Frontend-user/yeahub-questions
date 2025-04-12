import UiButton from "@/shared/ui/UiButton/UiButton.tsx";
import classes from './GetMockQuizButton.module.scss'
import {GetMockQuizButtonProps} from "@/feutures/interview/model/types.ts";


const GetMockQuizButton = ({onClick}:GetMockQuizButtonProps) => {
    return (
        <div className={classes.wrapper}>
            <UiButton type="arrow-right-purple" onClick={onClick}
                      className={classes.button}>Начать</UiButton>
        </div>
    );
};

export default GetMockQuizButton;
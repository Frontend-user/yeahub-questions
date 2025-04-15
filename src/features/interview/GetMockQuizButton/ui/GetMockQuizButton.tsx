import UiButton from "@/shared/ui/UiButton/UiButton.tsx";
import classes from './GetMockQuizButton.module.scss'
import {GetMockQuizButtonProps} from "@/features/interview/GetMockQuizButton/model/types.ts";


export const GetMockQuizButton = ({onClick}:GetMockQuizButtonProps) => {
    return (
        <div className={classes.wrapper}>
            <UiButton type="arrow-right-purple" onClick={onClick}
                      className={classes.button}>Начать</UiButton>
        </div>
    );
};


import UiProgressBar from "@/shared/ui/UiProgressBar/UiProgressBar.tsx";
import {useSelector} from "react-redux";
import {AppStateType} from "@/app/AppStore.ts";

const QuestionsProgressBar = () => {
    const totalPages = useSelector((state:AppStateType)=> state.interviewPreparation.totalPages)
    const currentPage = useSelector((state:AppStateType)=> state.interviewPreparation.currentPage)
    return (
        <div>
            <UiProgressBar
            title="Вопросы собеседования"
            allCount={totalPages}
            passedCount={currentPage}
            />
        </div>
    );
};

export default QuestionsProgressBar;
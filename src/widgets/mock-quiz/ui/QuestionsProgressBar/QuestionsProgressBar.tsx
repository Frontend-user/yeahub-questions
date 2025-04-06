import UiProgressBar from "@/shared/ui/UiProgressBar/UiProgressBar.tsx";
import {useSelector} from "react-redux";

const QuestionsProgressBar = () => {
    const totalPages = useSelector((state)=> state.interviewPreparation.totalPages)
    const currentPage = useSelector((state)=> state.interviewPreparation.currentPage)
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
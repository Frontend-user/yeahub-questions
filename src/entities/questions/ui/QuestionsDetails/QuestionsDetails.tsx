import './QuestionsDetails.scss'
import QuestionsDetailsHeader from "@/entities/questions/ui/QuestionsDetailsHeader/QuestionsDetailsHeader.tsx";
import QuestionsShortAnswer from "@/entities/questions/ui/QuestionsLongAnswer/QuestionsShortAnswer.tsx";
import QuestionsLongAnswer from "@/entities/questions/ui/QuestionsShortAnswer/QuestionsLongAnswer.tsx";
import {IQuestion} from "@/entities/questions";
import QuestionChars from "@/entities/questions/ui/QuestionChars/QuestionChars.tsx";
import {useNavigate} from "react-router-dom";
import UiButton from "@/shared/ui/UiButton/UiButton.tsx";

interface PropsQuestionsDetails {
    question: IQuestion
}

const QuestionsDetails = ({question}: PropsQuestionsDetails) => {
    const navigate = useNavigate()
    let author = {
        firstName:'',lastName:''
    }
    if (question) {
        if (question.createdBy) {
            author = {
                firstName: JSON.parse(question?.createdBy)?.firstName,
                lastName: JSON.parse(question?.createdBy)?.lastName
            }
        }
    }
    const goToQuestions = () => {
        navigate('/questions')
    }
    return (
        <div className="questions-details">

            <div className="questions-details__inner">
                <div className="questions-details__route-wrap">
                    <UiButton
                        type="arrow-left"
                        onClick={goToQuestions} text="Назад"/>
                </div>
                <div className="questions-details__content">

                    <div className="questions-details__left">
                        <QuestionsDetailsHeader title={question.title} imageSrc={question.imageSrc}
                                                description={question.description}
                        />
                        <QuestionsShortAnswer shortAnswer={question.shortAnswer}/>
                        <QuestionsLongAnswer longAnswer={question.longAnswer}/>

                    </div>
                    <div>
                        <QuestionChars rate={question.rate} complexity={question.complexity}
                                       keywords={question.keywords} skills={question.questionSkills}/>
                        <div className="questions-details__author-wrap">
                            <div
                                className="questions-details__author-info">
                                <span>Автор:</span> {author.firstName} {author.lastName}</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionsDetails;
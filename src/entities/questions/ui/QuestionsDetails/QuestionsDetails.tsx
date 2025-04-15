import './QuestionsDetails.scss'
import QuestionsDetailsHeader from "@/entities/questions/ui/QuestionsDetailsHeader/QuestionsDetailsHeader.tsx";
import QuestionsShortAnswer from "@/entities/questions/ui/QuestionsShortAnswer/QuestionsShortAnswer.tsx";
import QuestionsLongAnswer from "@/entities/questions/ui/QuestionsLongAnswer/QuestionsLongAnswer.tsx";
import {IQuestion} from "@/entities/questions";

import {NavLink } from "react-router-dom";
import UiButton from "@/shared/ui/UiButton/UiButton.tsx";
import QuestionChars from "@/entities/questions/ui/QuestionChars/QuestionChars.tsx";
import {PAGES} from "@/shared/constats/constats.ts";

interface PropsQuestionsDetails {
    question: IQuestion
}

export const QuestionsDetails = ({question}: PropsQuestionsDetails) => {
        let author = {
            firstName: '', lastName: ''
        }
        if (question) {
            if (question?.createdBy?.firstName) {
                author.firstName = JSON.parse(question?.createdBy)?.firstName
            }
            if (question?.createdBy?.lastName) {
                author.lastName = JSON.parse(question?.createdBy)?.lastName
            }
        }

        return (
            <div className="questions-details">

                <div className="questions-details__inner">
                    <div className="questions-details__route-wrap">
                        <NavLink className="questions-details__link" to={`/${PAGES.QUESTIONS}`}> <UiButton
                            type="arrow-left" text="Назад"/></NavLink>
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
    }
;
import './QuestionsLongAnswer.scss'

interface QuestionsLongAnswerProps {
    longAnswer: string;
}

import parse from "html-react-parser";
import UiButton from "@/widgets/header/ui/UiButton/UiButton.tsx";
import {useState} from "react";

const QuestionsLongAnswer = ({longAnswer}: QuestionsLongAnswerProps) => {
    const [showAll, setShowAll] = useState(false)
    return (
        <div

            className={`questions-long-answer
                     ${showAll && 'questions-long-answer_open'} `}>
            <div className="questions-long-answer__inner">
                <div className="questions-long-answer__title">Развёрнутый ответ</div>
                <div className={`questions-long-answer__text-wrapper
                     ${showAll && 'questions-long-answer__text-wrapper_open'} `}>

                    <div

                        className={`questions-long-answer__text
                     ${showAll && 'questions-long-answer__text_open'} `}>
                        <div
                            className={`questions-long-answer__button-wrap ${showAll && 'questions-long-answer__button-wrap_open'}`}>

                            <UiButton
                                type={showAll ? `select_open` : `select`}
                                onHandleClick={() => setShowAll(pr => !pr)}
                                className="questions-long-answer__button"
                                text={showAll ? 'Скрыть' : 'Развернуть'}/>
                        </div>
                        {parse(longAnswer)}

                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default QuestionsLongAnswer;
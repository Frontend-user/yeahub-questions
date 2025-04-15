import './QuestionsLongAnswer.scss'

interface QuestionsLongAnswerProps {
    longAnswer: string;
}

import parse from "html-react-parser";
import UiButton from "@/shared/ui/UiButton/UiButton.tsx";
import {useLayoutEffect, useRef} from "react";
import {useToggle} from "@/shared/hooks/useToggle.tsx";

const QuestionsLongAnswer = ({longAnswer}: QuestionsLongAnswerProps) => {
    const [showAll, toggleShowAll] = useToggle()
    const contentRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        if (contentRef.current) {
            const fullHeight = contentRef.current.scrollHeight;
            const newHeight = showAll ? fullHeight : fullHeight * 0.3;
            contentRef.current.style.setProperty('--max-height', `${newHeight}px`);
        }
    }, [showAll, longAnswer]);
    return (
        <div
            className="questions-long-answer">
            <div className="questions-long-answer__inner">
                <div className="questions-long-answer__title">Развёрнутый ответ</div>
                <div className="questions-long-answer__text-wrapper">
                    <div
                        ref={contentRef}
                        className='questions-long-answer__text'>
                        <div
                            className={"questions-long-answer__button-wrap"}>

                            <UiButton
                                type={showAll ? `select_open` : `select`}
                                onClick={toggleShowAll}
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
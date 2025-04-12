import UiCounter from "@/shared/ui/UiCounter/UiCounter.tsx";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {MOCK_LIMIT_DEFAULT_VALUE} from "@/shared/constats/constats.ts";
import {useToggle} from "@/shared/hooks/useToggle.tsx";

const SetQuestionsCount = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [isFirstRender, toggle] = useToggle()
    const [questionsCount, setQuestionsCount] = useState(MOCK_LIMIT_DEFAULT_VALUE)
    const onHandleIncrement = () => {
        if (questionsCount >= 50) return
        setQuestionsCount(previus => previus + 1)
        searchParams.set('limit', String(questionsCount))
        setSearchParams(searchParams)
    }
    useEffect(() => {
        if (!isFirstRender) {

            const stringLimit = searchParams.get('limit')
            const limit = stringLimit ? +stringLimit : null
            if (limit && Number(limit) > 10 && Number(limit) < 50) {
                setQuestionsCount(limit)
            }
            toggle()
        }
    }, [searchParams]);
    const onHandleDecrement = () => {
        if (questionsCount <= 10) {
            setQuestionsCount(MOCK_LIMIT_DEFAULT_VALUE)
            searchParams.set('limit', MOCK_LIMIT_DEFAULT_VALUE.toString())
            setSearchParams(searchParams)
            return
        }
        setQuestionsCount(previus => previus - 1)
        searchParams.set('limit', questionsCount.toString())
        setSearchParams(searchParams)
    }
    return (
        <UiCounter
            decrement={onHandleDecrement}
            increment={onHandleIncrement} value={questionsCount} label="Количество вопросов"/>
    );
};

export default SetQuestionsCount;
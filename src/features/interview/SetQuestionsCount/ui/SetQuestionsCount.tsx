import UiCounter from "@/shared/ui/UiCounter/UiCounter.tsx";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  DEFAULT_MOCK_QUESTIONS_MAX_COUNT,
  DEFAULT_MOCK_QUESTIONS_MIN_COUNT,
  MOCK_LIMIT_DEFAULT_VALUE,
} from "@/shared/constats/constats.ts";
import { useToggle } from "@/shared/hooks/useToggle.tsx";

export const SetQuestionsCount = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFirstRender, toggle] = useToggle();
  const [questionsCount, setQuestionsCount] = useState(MOCK_LIMIT_DEFAULT_VALUE);

  const onHandleIncrement = () => {
    if (questionsCount >= DEFAULT_MOCK_QUESTIONS_MAX_COUNT) return;

    setQuestionsCount((previus) => previus + 1);
    searchParams.set("limit", String(questionsCount));
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (!isFirstRender) {
      const stringLimit = searchParams.get("limit");
      const limit = stringLimit ? Number(stringLimit) : null;

      const existLimitAndMoreThanMinCount = limit && limit > DEFAULT_MOCK_QUESTIONS_MIN_COUNT;
      const limitLessThanMaxCount = limit && limit < DEFAULT_MOCK_QUESTIONS_MAX_COUNT;

      if (existLimitAndMoreThanMinCount && limitLessThanMaxCount) {
        setQuestionsCount(limit);
      }
      toggle();
    }
  }, [searchParams]);

  const onHandleDecrement = () => {
    if (questionsCount <= DEFAULT_MOCK_QUESTIONS_MIN_COUNT) {
      setQuestionsCount(MOCK_LIMIT_DEFAULT_VALUE);
      searchParams.set("limit", MOCK_LIMIT_DEFAULT_VALUE.toString());
      setSearchParams(searchParams);
      return;
    }

    setQuestionsCount((previus) => previus - 1);
    searchParams.set("limit", questionsCount.toString());
    setSearchParams(searchParams);
  };

  return (
    <UiCounter
      decrement={onHandleDecrement}
      increment={onHandleIncrement}
      value={questionsCount}
      label="Количество вопросов"
    />
  );
};

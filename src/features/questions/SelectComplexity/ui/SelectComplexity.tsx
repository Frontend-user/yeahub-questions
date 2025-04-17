import { useEffect } from "react";
import "./SelectComplexity.scss";
import UiSelect from "@/shared/ui/UiSelect/UiSelect.tsx";
import { useChangeParams } from "@/shared/hooks/useChangeParams.ts";
import { chooseComplexity } from "@/entities/questions/model/questionsSlice.ts";
import { useAppSelector } from "@/shared/hooks/useAppSelector.ts";
import { getComplexityList } from "@/entities/questions";

export const SelectComplexity = () => {
  const list = useAppSelector(getComplexityList);

  const [onHandleClick, defineParamsInState] = useChangeParams(chooseComplexity, "complexity");

  useEffect(() => {
    defineParamsInState();
  }, []);

  return (
    <div>
      <UiSelect
        showButton={false}
        title="Уровень сложности"
        onHandleClick={onHandleClick}
        list={list}
      />
    </div>
  );
};

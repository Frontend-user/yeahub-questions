import { useEffect } from "react";
import "./SelectRate.scss";
import UiSelect from "@/shared/ui/UiSelect/UiSelect.tsx";
import { useChangeParams } from "@/shared/hooks/useChangeParams.ts";
import { chooseRate, getRateList } from "@/entities/questions";
import { useAppSelector } from "@/shared/hooks/useAppSelector.ts";

export const SelectRate = () => {
  const [onHandleChooseRate, defineParamsInState] = useChangeParams(chooseRate, "rate");

  const rateList = useAppSelector(getRateList);

  useEffect(() => {
    defineParamsInState();
  }, []);

  return (
    <div>
      <UiSelect
        showButton={false}
        list={rateList}
        title="Рейтинг"
        onHandleClick={onHandleChooseRate}
      />
    </div>
  );
};

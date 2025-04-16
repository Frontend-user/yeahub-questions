import { useEffect } from "react";
import "./SelectRate.scss";
import UiSelect from "@/shared/ui/UiSelect/UiSelect.tsx";
import { useSelector } from "react-redux";
import { AppStateType } from "@/app/AppStore.ts";
import { chooseRate } from "@/entities/rate";
import { useChangeParams } from "@/shared/hooks/useChangeParams.ts";

export const SelectRate = () => {
  const [onHandleChooseRate, defineParamsInState] = useChangeParams(
    chooseRate,
    "rate",
  );
  const rateList = useSelector((state: AppStateType) => state.rate.rateList);

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

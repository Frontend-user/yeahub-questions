import { useEffect } from "react";
import "./SelectSpecializations.scss";
import UiSelect from "@/shared/ui/UiSelect/UiSelect.tsx";
import { chooseSpecialization, getFormattedSpecializations } from "@/entities/specializations";
import { useChangeParams } from "@/shared/hooks/useChangeParams.ts";
import { DEFAULT_SPECIALIZATIONS_SLICE_COUNT, SELECT_TYPE } from "@/shared/constats/constats.ts";
import { useAppSelector } from "@/shared/hooks/useAppSelector.ts";

export const SelectSpecializations = () => {
  const list = useAppSelector(getFormattedSpecializations);

  const [onChooseItem, defineParamsInState] = useChangeParams(
    chooseSpecialization,
    "specialization",
    SELECT_TYPE.ONE_ITEM,
  );

  useEffect(() => {
    defineParamsInState();
  }, []);

  return (
    <div className="select-specializations">
      <UiSelect
        sliceCount={DEFAULT_SPECIALIZATIONS_SLICE_COUNT}
        onHandleClick={onChooseItem}
        title="Специализация"
        list={list}
      />
    </div>
  );
};

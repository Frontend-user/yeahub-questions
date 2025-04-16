import { useEffect } from "react";
import "./SelectSkills.scss";
import UiSelect from "@/shared/ui/UiSelect/UiSelect.tsx";
import { useSelector } from "react-redux";
import { AppStateType } from "@/app/AppStore.ts";
import { chooseSkills } from "@/entities/skills";
import { ISelectItem } from "@/shared/types/types.ts";
import { useChangeParams } from "@/shared/hooks/useChangeParams.ts";
import { DEFAULT_SKILLS_SLICE_COUNT } from "@/shared/constats/constats.ts";

export const SelectSkills = ({
  sliceCount = DEFAULT_SKILLS_SLICE_COUNT,
  title = "Навыки",
}) => {
  const [onChooseItem, defineParamsInState] = useChangeParams(
    chooseSkills,
    "skills",
  );
  const list: ISelectItem[] = useSelector(
    (state: AppStateType) => state.skills.formattedSkills,
  );
  useEffect(() => {
    defineParamsInState();
  }, []);
  return (
    <div className="select-skills">
      <UiSelect
        sliceCount={sliceCount}
        onHandleClick={onChooseItem}
        title={title}
        list={list}
      />
    </div>
  );
};

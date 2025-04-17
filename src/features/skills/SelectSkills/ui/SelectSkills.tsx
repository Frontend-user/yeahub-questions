import { useEffect } from "react";
import "./SelectSkills.scss";
import UiSelect from "@/shared/ui/UiSelect/UiSelect.tsx";
import { chooseSkills, getFormattedSkills } from "@/entities/skills";
import { ISelectItem } from "@/shared/types/types.ts";
import { useChangeParams } from "@/shared/hooks/useChangeParams.ts";
import { DEFAULT_SKILLS_SLICE_COUNT } from "@/shared/constats/constats.ts";
import { useAppSelector } from "@/shared/hooks/useAppSelector.ts";

export const SelectSkills = ({ sliceCount = DEFAULT_SKILLS_SLICE_COUNT, title = "Навыки" }) => {
  const [onChooseItem, defineParamsInState] = useChangeParams(chooseSkills, "skills");

  const list: ISelectItem[] = useAppSelector(getFormattedSkills);

  useEffect(() => {
    defineParamsInState();
  }, []);

  return (
    <div className="select-skills">
      <UiSelect sliceCount={sliceCount} onHandleClick={onChooseItem} title={title} list={list} />
    </div>
  );
};

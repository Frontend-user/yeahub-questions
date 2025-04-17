export { useGetSkillsQuery, skillsApi } from "./api/skillsApi.ts";
export type { ISkill, IFormattedSkill, ISkillsInitialState } from "./model/types.ts";
export {
  setSkillsList,
  chooseSkills,
  setFormattedSkillsList,
  skillsSlice,
} from "./model/skillsSlice.ts";

export { getFormattedSkills } from "./model/selectors/skillsSelectors";

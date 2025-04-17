import { AppStateType } from "@/app/AppStore.ts";


export const  getFormattedSkills = (state: AppStateType) =>
  state.skills.formattedSkills

import { AppStateType } from "@/app/AppStore.ts";

export const getFormattedSpecializations = (state: AppStateType) =>
  state.specializations.formattedSpecializations;

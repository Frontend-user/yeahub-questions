import { AppStateType } from "@/app/AppStore.ts";

export const isUserAuthenticated = (state: AppStateType) =>
  state?.authSlice?.isUserAuthenticated || false;

import { AppStateType } from "@/app/AppStore.ts";


export const  getIsUserAuthenticated = (state: AppStateType) =>
  state.authSlice.isUserAuthenticated || false;

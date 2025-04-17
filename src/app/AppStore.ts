import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "@/app/AppReducer.ts";
import { commonApi } from "@/shared/api/commonApi.ts";

export const createReduxStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(commonApi.middleware),
  });
};
const appStore = createReduxStore();
export default appStore;
export type AppStateType = ReturnType<typeof appStore.getState>;

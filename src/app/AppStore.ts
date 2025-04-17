import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "@/app/AppReducer.ts";
import { commonApi } from "@/shared/api/commonApi.ts";

const appStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(commonApi.middleware),
});

export default appStore;
export type AppStateType = ReturnType<typeof appStore.getState>;

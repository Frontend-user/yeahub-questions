import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppStateType, createReduxStore } from "@/app/AppStore.ts";

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

import {configureStore} from "@reduxjs/toolkit";
import {questionsApi} from "@/entities/questions";
import {rootReducer} from "@/app/AppReducer.ts";
import {specializationsApi} from "@/entities/specializations";
import {skillsApi} from "@/entities/skills";

const appStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(questionsApi.middleware,
                specializationsApi.middleware,
                skillsApi.middleware
            )
})

export default appStore;
export type AppStateType = ReturnType<typeof appStore.getState>
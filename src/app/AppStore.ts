import {configureStore} from "@reduxjs/toolkit";
import {questionsApi} from "@/entities/questions";
import {rootReducer} from "@/app/AppReducer.ts";

const appStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(questionsApi.middleware)
})

export default appStore;
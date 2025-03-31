import {combineReducers} from "@reduxjs/toolkit";
import {questionsApi, questionsSlice} from "@/entities/questions";
import {specializationsApi, specializationsSlice} from "@/entities/specializations";

export const rootReducer = combineReducers({
    [questionsApi.reducerPath]: questionsApi.reducer,
    [specializationsApi.reducerPath]: specializationsApi.reducer,
    questions: questionsSlice.reducer,
    specializations: specializationsSlice.reducer

})
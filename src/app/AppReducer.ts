import {combineReducers} from "@reduxjs/toolkit";
import {questionsApi, questionsSlice} from "@/entities/questions";

export const rootReducer = combineReducers({
    [questionsApi.reducerPath]: questionsApi.reducer,
    questions: questionsSlice.reducer

})
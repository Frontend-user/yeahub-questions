import {combineReducers} from "@reduxjs/toolkit";
import {questionsApi} from "@/entities/questions";

export const rootReducer = combineReducers({
    [questionsApi.reducerPath]: questionsApi.reducer
})
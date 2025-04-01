import {combineReducers} from "@reduxjs/toolkit";
import {questionsApi, questionsSlice} from "@/entities/questions";
import {specializationsApi, specializationsSlice} from "@/entities/specializations";
import {skillsApi, skillsSlice} from "@/entities/skills";

export const rootReducer = combineReducers({
    [questionsApi.reducerPath]: questionsApi.reducer,
    [specializationsApi.reducerPath]: specializationsApi.reducer,
    [skillsApi.reducerPath]: skillsApi.reducer,
    questions: questionsSlice.reducer,
    specializations: specializationsSlice.reducer,
    skills: skillsSlice.reducer,
})
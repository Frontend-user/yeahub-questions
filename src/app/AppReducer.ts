import {combineReducers} from "@reduxjs/toolkit";
import {questionsSlice} from "@/entities/questions";
import {specializationsSlice} from "@/entities/specializations";
import {skillsSlice} from "@/entities/skills";
import {complexitySlice} from "@/entities/complexity";
import {rateSlice} from "@/entities/rate";
import {commonApi} from "@/shared/api/commonApi.ts";

export const rootReducer = combineReducers({
    [commonApi.reducerPath]: commonApi.reducer,
    questions: questionsSlice.reducer,
    specializations: specializationsSlice.reducer,
    skills: skillsSlice.reducer,
    complexity: complexitySlice.reducer,
    rate: rateSlice.reducer,
})
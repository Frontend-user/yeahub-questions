import { combineReducers } from "@reduxjs/toolkit";
import { questionsSlice } from "@/entities/questions";
import { specializationsSlice } from "@/entities/specializations";
import { skillsSlice } from "@/entities/skills";
import { commonApi } from "@/shared/api/commonApi.ts";
import { interviewPreparationSlice } from "@/entities/interview-preparation";
import { authSlice } from "@/entities/auth";

export const rootReducer = combineReducers({
  [commonApi.reducerPath]: commonApi.reducer,
  questions: questionsSlice.reducer,
  interviewPreparation: interviewPreparationSlice.reducer,
  specializations: specializationsSlice.reducer,
  skills: skillsSlice.reducer,
  authSlice: authSlice.reducer,
});

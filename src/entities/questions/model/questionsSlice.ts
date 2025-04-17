import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IQuestion } from "@/entities/questions";
import { questionsInitialState } from "@/entities/questions/libs/constants.ts";

const questionsSlice = createSlice({
  name: "questions",
  initialState: questionsInitialState,
  reducers: {
    chooseRate: (state, action) => {
      const choosedRateId = action.payload;
      state.rateList.forEach((rateItem) => {
        if (rateItem.id === choosedRateId) {
          rateItem.selected = !rateItem.selected;
        }
      });
    },
    setQuestionDetails: (state, action: PayloadAction<IQuestion>) => {
      state.questionDetails = action.payload;
    },
    addQuestion: (state, action: PayloadAction<IQuestion>) => {
      state.questions.push(action.payload);
    },
    setQuestionsList: (state, action) => {
      state.questions = action.payload;
    },

    setQuestionsPaginateParams: (state, action) => {
      state.questionsPaginateParams = action.payload;
    },
  },
});
export const { addQuestion, chooseRate,  setQuestionsList, setQuestionDetails, setQuestionsPaginateParams } =
  questionsSlice.actions;
export { questionsSlice };

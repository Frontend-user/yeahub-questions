import { Action, createSlice, ThunkDispatch } from "@reduxjs/toolkit";
import { IQuestion } from "@/entities/questions";
import { AppStateType } from "@/app/AppStore.ts";
import { IInterviewPreparationsInitialState } from "@/entities/interview-preparation";

const initialState: IInterviewPreparationsInitialState = {
  mockQuestionsList: [],
  currentPage: 1,
  totalPages: 1,
  currentMockQuestion: {
    id: 0,
    title: "",
    shortAnswer: "",
    nextQuestionId: null,
    prevQuestionId: null,
    isUserKnow: false,
  },
};

export const interviewPreparationSlice = createSlice({
  name: "interviewPreparation",
  initialState,
  reducers: {
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    nextPageAction: (state) => {
      state.currentPage += 1;
    },
    prevPageAction: (state) => {
      state.currentPage -= 1;
    },
    changeUserKnowStatus: (state, action) => {
      const mockQuestionToChangeId = action.payload.id;
      const findMockQuestion = state.mockQuestionsList.find(
        (mockQuestion) => mockQuestion.id === mockQuestionToChangeId,
      );

      if (findMockQuestion) {
        findMockQuestion.isUserKnow = action.payload.value;
      }

      state.currentMockQuestion.isUserKnow = action.payload.value;
    },

    resetMockPassage: (state) => {
      state.currentPage = 1;
      state.mockQuestionsList.forEach((mockQuestion) => {
        mockQuestion.isUserKnow = false;
      });
      state.currentMockQuestion = state.mockQuestionsList[0];
      state.currentMockQuestion.isUserKnow = false;
    },
    setMockQuestionsList: (state, action: { payload: IQuestion[] }) => {
      state.mockQuestionsList = action.payload.map((question, idx) => {
        const nextQuestionId = action.payload[idx + 1]?.id || null;
        const prevQuestionId = action.payload[idx - 1]?.id || null;
        return {
          id: question.id,
          title: question.title,
          shortAnswer: question.shortAnswer,
          nextQuestionId,
          prevQuestionId,
          isUserKnow: false,
        };
      });
    },
    selectCurrentMockQuestion: (state, action: { payload: number }) => {
      const selectedMockQuestionId = action.payload;
      const findNewCurrentMockQuestion = state.mockQuestionsList.find(
        (mockQuestion) => mockQuestion.id === selectedMockQuestionId,
      );
      if (findNewCurrentMockQuestion) {
        state.currentMockQuestion = { ...findNewCurrentMockQuestion };
      }
    },
  },
});

export const setMockQuestionsAndSelectFirst =
  (data: { questions: IQuestion[]; fullCount: number }) =>
  async (dispatch: ThunkDispatch<AppStateType, unknown, Action>) => {
    const questions: IQuestion[] = data.questions;
    dispatch(setCurrentPage(1));
    dispatch(setTotalPages(data.fullCount));
    dispatch(setMockQuestionsList(questions));
    if (questions.length > 0) {
      dispatch(selectCurrentMockQuestion(questions[0].id));
    }
  };
export const {
  setMockQuestionsList,
  selectCurrentMockQuestion,
  nextPageAction,
  prevPageAction,
  setTotalPages,
  setCurrentPage,
  changeUserKnowStatus,
  resetMockPassage,
} = interviewPreparationSlice.actions;

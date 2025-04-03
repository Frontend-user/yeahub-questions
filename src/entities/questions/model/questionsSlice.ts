import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IQuestion, IQuestionsSliceInitialState} from "@/entities/questions";

const initialState: IQuestionsSliceInitialState = {
    questions: [],
    questionsPaginateParams: {
        page: 1,
        limit: 5
    }
}

const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        addQuestion: (state, action: PayloadAction<IQuestion>) => {
            state.questions.push(action.payload);
        },
        setQuestionsList: (state, action) => {
            state.questions = action.payload;
        },

        setQuestionsPaginateParams: (state, action) => {
            state.questionsPaginateParams = action.payload;
        },
    }
})
export const {addQuestion, setQuestionsList, setQuestionsPaginateParams} = questionsSlice.actions;
export {questionsSlice}
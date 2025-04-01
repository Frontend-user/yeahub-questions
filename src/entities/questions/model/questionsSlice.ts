import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IQuestion, IQuestionsSliceInitialState} from "@/entities/questions";

const initialState: IQuestionsSliceInitialState = {
    questions: []
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
        }
    }
})
export const {addQuestion, setQuestionsList} = questionsSlice.actions;
export {questionsSlice}
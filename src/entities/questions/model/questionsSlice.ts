import {createSlice} from "@reduxjs/toolkit";


const questionsSlice = createSlice({
    name: 'questions',
    initialState: {
        questions: []
    },
    reducers: {
        addQuestion: (state, action) => {
            state.questions.push(action.payload);
        },
        setQuestionsList: (state, action) => {
            state.questions = action.payload;
        }
    }
})
export const {addQuestion,setQuestionsList} = questionsSlice.actions;
export {questionsSlice}
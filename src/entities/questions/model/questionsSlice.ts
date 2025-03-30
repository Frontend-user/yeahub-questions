import {createSlice} from "@reduxjs/toolkit";


const questionsSlice = createSlice({
    name: 'questions',
    initialState: {
        questions: ['1','2','3']
    },
    reducers: {
        addQuestion: (state, action) => {
            state.questions.push(action.payload);
        }
    }
})
export const {addQuestion} = questionsSlice.actions;
export {questionsSlice}
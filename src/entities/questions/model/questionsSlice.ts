import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IQuestion, IQuestionsSliceInitialState} from "@/entities/questions";

const initialState: IQuestionsSliceInitialState = {
    questions: [],
    questionsPaginateParams: {
        page: 1,
        limit: 7
    },
    questionDetails: {
        id: 0,
        title: "",
        description: "",
        longAnswer: "",
        shortAnswer: "",
        status: "",
        rate: 0,
        complexity: 0,
        createdAt: null,
        updatedAt: null,
        questionSpecializations: [],
        questionSkills: []
    }
}

const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
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
    }
})
export const {addQuestion, setQuestionsList, setQuestionDetails, setQuestionsPaginateParams} = questionsSlice.actions;
export {questionsSlice}
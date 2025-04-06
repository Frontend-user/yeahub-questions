import {createSlice} from "@reduxjs/toolkit";
import {IQuestion} from "@/entities/questions";


interface IMockQuestion {
    id: number;
    title: string;
    shortAnswer: string;
    nextQuestionId: null | number;
    prevQuestionId: null | number;
    isUserKnow: boolean
}

interface IInterviewPreparationsInitialState {
    mockQuestionsList: IMockQuestion[],
    currentMockQuestion: IMockQuestion
    currentPage: number
    totalPages: number
}

const initialState: IInterviewPreparationsInitialState = {
    mockQuestionsList: [],
    currentPage: 1,
    totalPages: 1,
    currentMockQuestion: {
        id: 0,
        title: "",
        shortAnswer: "",
        isUserKnow: false
    }
}

const interviewPreparationSlice = createSlice({
    name: 'interviewPreparation',
    initialState,
    reducers: {
        setTestSomeList: (state) => {
            let finded = state.testSomeList.find(_ => _.id === 1)
            finded.name = false
        },
        setTotalPages: (state, action) => {
            state.totalPages = action.payload
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        nextPageAction: (state) => {
            state.currentPage += 1
        },
        prevPageAction: (state) => {
            state.currentPage -= 1
        },
        changeUserKnowStatus: (state, action) => {
            const findMockQuestion = state.mockQuestionsList.find(_ => _.id === action.payload.id)
            if (findMockQuestion) {
                findMockQuestion.isUserKnow = action.payload.value
            }
            state.currentMockQuestion.isUserKnow = action.payload.value

        },

        resetMockPassage: (state) => {
            state.currentPage = 1
            state.mockQuestionsList.forEach((mockQuestion) => {
                mockQuestion.isUserKnow = false
            })
            state.currentMockQuestion.isUserKnow = false
        },
        setMockQuestionsList: (state, action: { payload: IQuestion[] }) => {
            state.mockQuestionsList = action.payload.map((question, idx) => {

                const nextQuestionId = action.payload[idx + 1]?.id || null
                const prevQuestionId = action.payload[idx - 1]?.id || null
                return {
                    id: question.id,
                    title: question.title,
                    shortAnswer: question.shortAnswer,
                    nextQuestionId,
                    prevQuestionId,
                    isUserKnow: false

                }
            })
        },
        selectCurrentMockQuestion: (state, action: { payload: number }) => {
            const findNewCurrentMockQuestion = state.mockQuestionsList.find(_ => _.id === action.payload)
            if (findNewCurrentMockQuestion) {
                state.currentMockQuestion = {...findNewCurrentMockQuestion}
            }
        }

    },
})

export const setMockQuestionsAndSelectFirst = (data) => async (dispatch: any) => {
    const questions: IQuestion[] = data.questions
    dispatch(setCurrentPage(1))
    dispatch(setTotalPages(data.fullCount))
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
    resetMockPassage
} = interviewPreparationSlice.actions
export {interviewPreparationSlice}
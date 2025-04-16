export {
    interviewPreparationApi, useGetMockQuizzesQuery, useLazyGetMockQuizzesQuery
} from './api/interviewPreparationApi.ts'
export type {
    IMockQuestion,
    IInterviewPreparationsInitialState,
    IPassedQuestionCardProps,
} from './model/types.ts'

export {PassedQuestionCard} from './ui/PassedQuestionCard/PassedQuestionCard.tsx'
export {PassedQuestionsList} from './ui/PassedQuestionsList/PassedQuestionsList.tsx'
export {QuizQuestionInfo} from './ui/QuizQuestionInfo/QuizQuestionInfo'
export {interviewPreparationSlice} from './model/interviewPreparationSlice.ts'

export {
    setMockQuestionsList,
    selectCurrentMockQuestion,
    nextPageAction,
    prevPageAction,
    setTotalPages,
    setCurrentPage,
    changeUserKnowStatus,
    resetMockPassage
} from './model/interviewPreparationSlice.ts'
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


interface IPassedQuestionCardProps {
    id: number;
    imageSrc?: string;
    question: string;
    isUserKnow: boolean
}



export type {
    IMockQuestion,
    IInterviewPreparationsInitialState,
    IPassedQuestionCardProps,
}
import {ReactNode} from "react";


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

interface IQuizQuestionCardProps {
    prevButton: ReactNode;
    nextButton: ReactNode;
    cancelButton: ReactNode;
    knowButton: ReactNode;
    toggleShowAnswerButton: () => void;
    dontKnowButton: ReactNode;
    quizStaticImage: ReactNode;
    title: string;
    showAnswer: boolean;
    shortAnswer: string;
}

export type {
    IMockQuestion,
    IInterviewPreparationsInitialState,
    IPassedQuestionCardProps,
    IQuizQuestionCardProps
}
export const API_TOKEN = import.meta.env.VITE_API_TOKEN
export const API_URL = import.meta.env.VITE_API_URL
export const API_ROUTES = {
    QUESTIONS: "questions/public-questions",
    SPECIALIZATIONS: 'specializations',
    SKILLS: 'skills',
    SIGN_UP:'auth/signUp',
    LOGIN:'auth/login',
    MOCK_QUIZZES:'interview-preparation/quizzes/mock/new'
}
export const enum REQUEST_STATUSES {
    USER_EXIST =  409,
}
export const enum PAGES {
    INTERVIEW = 'interview',
    QUESTIONS= 'questions',
    REGISTRATION= 'registration',
    LOGIN= 'login',
    QUESTION_ID= '/question-details/:questionId',
    MOCK_QUIZ= 'interview/mock-quiz',
    PASSED_QUESTIONS= 'interview/passed-questions',
}

export const MOCK_LIMIT_DEFAULT_VALUE:number = 20
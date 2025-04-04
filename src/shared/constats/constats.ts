export const API_TOKEN = import.meta.env.VITE_API_TOKEN
export const API_URL = import.meta.env.VITE_API_URL
export const API_ROUTES = {
    QUESTIONS: "questions/public-questions",
    SPECIALIZATIONS: 'specializations',
    SKILLS: 'skills'
}

export const enum PAGES {
    TRAINER = 'trainer',
    QUESTIONS= 'questions',
}
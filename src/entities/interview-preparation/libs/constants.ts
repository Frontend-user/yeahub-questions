import {UiRoute} from "@/shared/types/types.ts";
import {PAGES} from "@/shared/constats/constats.ts";

export const interviewRoutes: UiRoute[] = [
    {
        id: 1,
        name: 'Главная',
        to: `/${PAGES.QUESTIONS}`,
        isActive: false
    },
    {
        id: 2,
        to: `/${PAGES.INTERVIEW}`,
        name: 'Собеседование',
        isActive: true
    },
]
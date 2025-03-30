import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_ROUTES, API_TOKEN, API_URL} from "@/shared/constats/constats.ts";

export const questionsApi = createApi({
    reducerPath: "questionsApi",
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints: (builder) => ({
        getQuestions: builder.query({
            query: () => ({
                url: API_ROUTES.QUESTIONS,
                headers: ({Authorization: API_TOKEN})
            })
        })
    })
})

export const {useGetQuestionsQuery} = questionsApi
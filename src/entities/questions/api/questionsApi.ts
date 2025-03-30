import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const questionsApi = createApi({
    reducerPath: "questionsApi",
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (builder) => ({
           getQuestions: builder.query({
            query: () => 'todos'
        })
    })
})

export const {useGetQuestionsQuery} = questionsApi
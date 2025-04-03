import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_ROUTES, API_TOKEN, API_URL} from "@/shared/constats/constats.ts";
import {setQuestionsList, setQuestionsPaginateParams} from "@/entities/questions";
import {useSelector} from "react-redux";

export const questionsApi = createApi({
    reducerPath: "questionsApi",
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints: (builder) => ({
        getQuestions: builder.query({
            query: (params) => {
                return {
                    url: API_ROUTES.QUESTIONS,
                    headers: {Authorization: API_TOKEN},
                    params: {
                        ...params,
                        skillFilterMode: 'ANY',
                    },
                }
            },
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled;
                    dispatch(setQuestionsList(data.data))
                    dispatch(setQuestionsPaginateParams({
                        limit: data.limit,
                        page: data.page,
                        total: data.total
                    }))
                } catch (error) {
                    console.log(error);
                }
            }
        }),

    })
})

export const {getQuestions} = questionsApi.endpoints
export const {useGetQuestionsQuery} = questionsApi

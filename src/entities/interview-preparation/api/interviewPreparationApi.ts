import {commonApi} from "@/shared/api/commonApi.ts";
import {API_ROUTES} from "@/shared/constats/constats.ts";
import {
    setMockQuestionsAndSelectFirst,
} from "@/entities/interview-preparation/model/interviewPreparationSlice.ts";

const interviewPreparationApi = commonApi.injectEndpoints({
    endpoints: (builder) => ({
        getMockQuizzes: builder.query({
            query: (params) => ({
                params,
                url: API_ROUTES.MOCK_QUIZZES
            }),
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled;
                    await dispatch(setMockQuestionsAndSelectFirst(data))
                } catch (e) {

                }
            }
        }),
    })

})

export const {getMockQuizzes} = interviewPreparationApi.endpoints
export const {useGetMockQuizzesQuery, useLazyGetMockQuizzesQuery} = interviewPreparationApi
export {interviewPreparationApi};
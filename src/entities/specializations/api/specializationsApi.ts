import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_ROUTES, API_TOKEN, API_URL} from "@/shared/constats/constats.ts";
import {setFormattedSpecializations, setSpecializationsList} from "@/entities/specializations";

const specializationsApi = createApi({
    reducerPath: 'specializationsApi',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints: (build) => ({
        getSpecializations: build.query({
            query: ()  => ({
                url: API_ROUTES.SPECIALIZATIONS,
                headers: ({Authorization: API_TOKEN})
            }),
            async onQueryStarted(arg, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled;
                    dispatch(setSpecializationsList(data.data))
                    dispatch(setFormattedSpecializations(data.data))
                } catch (e) {
                    console.log(e)
                }
            }
        })

    })

})

export {specializationsApi}
export const {useGetSpecializationsQuery} = specializationsApi
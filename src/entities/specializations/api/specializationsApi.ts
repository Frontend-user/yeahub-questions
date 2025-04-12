import {API_ROUTES, API_TOKEN} from "@/shared/constats/constats.ts";
import {setFormattedSpecializations, setSpecializationsList} from "@/entities/specializations/model/specializationsSlice.ts";
import {commonApi} from "@/shared/api/commonApi.ts";

const specializationsApi = commonApi.injectEndpoints({
    endpoints: (build) => ({
        getSpecializations: build.query({
            query: ()  => ({
                url: API_ROUTES.SPECIALIZATIONS,
                headers: ({Authorization: API_TOKEN})
            }),
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
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
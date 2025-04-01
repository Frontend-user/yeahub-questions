import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_ROUTES, API_URL} from "@/shared/constats/constats.ts";
import {setFormattedSkillsList, setSkillsList} from "@/entities/skills";

const skillsApi = createApi({
    reducerPath: 'skillsApi',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints: (build) => ({
        getSkills: build.query({
            query: () => API_ROUTES.SKILLS,
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled
                    dispatch(setSkillsList(data.data))
                    dispatch(setFormattedSkillsList(data.data))
                } catch (e) {
                    console.log(e)
                }
            }
        })
    }),
})

export {skillsApi}
export const {useGetSkillsQuery} = skillsApi
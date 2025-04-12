import {API_ROUTES} from "@/shared/constats/constats.ts";
import {setFormattedSkillsList, setSkillsList} from "@/entities/skills/model/skillsSlice.ts"
import {commonApi} from "@/shared/api/commonApi.ts";

const skillsApi = commonApi.injectEndpoints({
    endpoints: (build) => ({
        getSkills: build.query({
            query: (params={}) => ({
                params,
                url: API_ROUTES.SKILLS
            }),
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
import {commonApi} from "@/shared/api/commonApi.ts";
import {API_ROUTES} from "@/shared/constats/constats.ts";

const loginApi = commonApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => {
                return {
                    url: API_ROUTES.LOGIN,
                    method: 'POST',
                    body
                }
            }
        })
    })

})

export const {useLoginMutation} = loginApi
import {commonApi} from "@/shared/api/commonApi.ts";
import {API_ROUTES} from "@/shared/constats/constats.ts";

const registerApi = commonApi.injectEndpoints({
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (body) => {
                return {
                    url: API_ROUTES.SIGN_UP,
                    method: 'POST',
                    body
                }
            }
        })
    })

})

export const {useSignUpMutation} = registerApi
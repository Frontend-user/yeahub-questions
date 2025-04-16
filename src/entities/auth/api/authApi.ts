import {API_ROUTES} from "@/shared/constats/constats.ts";
import { commonApi } from "@/shared/api/commonApi.ts";

const authApi = commonApi.injectEndpoints({
  endpoints: (builder) => ({

    login: builder.mutation({
      query: (body) => {
        return {
          url: API_ROUTES.LOGIN,
          method: 'POST',
          body
        }
      }
    }),

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

export const {useLoginMutation,useSignUpMutation} = authApi
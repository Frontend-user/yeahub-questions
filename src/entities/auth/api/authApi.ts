import { API_ROUTES } from "@/shared/constats/constats.ts";
import { commonApi } from "@/shared/api/commonApi.ts";

const authApi = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => {
        return {
          url: API_ROUTES.AUTH.LOGIN,
          method: "POST",
          body,
        };
      },
    }),

    signUp: builder.mutation({
      query: (body) => {
        return {
          url: API_ROUTES.AUTH.SIGN_UP,
          method: "POST",
          body,
        };
      },
    }),

    profile: builder.query({
      query: () => {
        return {
          url: API_ROUTES.AUTH.PROFILE,
        };
      },
    }),

    logout: builder.query({
      query: () => {
        return {
          url: API_ROUTES.AUTH.LOGOUT,
        };
      },
    }),

    refresh: builder.query({
      query: () => {
        return {
          url: API_ROUTES.AUTH.REFRESH,
        };
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRefreshQuery,
  useLogoutQuery,
  useLazyLogoutQuery,
  useLazyRefreshQuery,
  useProfileQuery,
  useSignUpMutation,
} = authApi;

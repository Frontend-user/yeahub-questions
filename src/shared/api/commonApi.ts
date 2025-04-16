import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ROUTES, API_URL } from "@/shared/constats/constats.ts";
import { getCookie } from "@/shared/lib/utils/getCookie.ts";

export const commonApi = createApi({
  reducerPath: "commonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    credentials: "include",

    prepareHeaders: (headers, { endpoint }) => {
      if (endpoint === API_ROUTES.AUTH.REFRESH) {
        return headers;
      }
      const BearerToken = getCookie("Authorization");
      if (BearerToken) {
        headers.set("Authorization", BearerToken);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});

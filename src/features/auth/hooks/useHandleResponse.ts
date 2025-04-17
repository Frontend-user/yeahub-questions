import { IRTKMutationResulT } from "@/features/auth/model/types.ts";
import { useEffect, useState } from "react";
import { isFetchBaseQueryError } from "@/features/auth/libs/helpers.ts";
import { REQUEST_STATUSES } from "@/shared/constats/constats.ts";
import { AUTH_ERRORS } from "@/features/auth/libs/constants.ts";

export const useHandleResponse = (result: IRTKMutationResulT) => {
  const [responseError, setResponseError] = useState("");
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    console.log(result, "USE");

    const error = result.error;
    if (result.isError && isFetchBaseQueryError(error)) {
      switch (error.status) {
        case REQUEST_STATUSES.USER_EXIST:
          setResponseError(AUTH_ERRORS.EXIST_USERNAME);
          break;
        case REQUEST_STATUSES.UNAUTHORIZED:
          setResponseError(AUTH_ERRORS.UNAUTHORIZED);
          break;
        default:
          setResponseError(AUTH_ERRORS.SERVER_ERROR);
      }
    }

    if (result.isSuccess && result.data?.access_token) {
      setAccessToken(result.data?.access_token);
    }
  }, [result]);
  return { responseError, accessToken };
};

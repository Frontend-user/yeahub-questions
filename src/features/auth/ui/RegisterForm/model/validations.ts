import { REQUEST_STATUSES } from "@/shared/constats/constats.ts";
import { IRTKMutationResulT } from "@/features/auth/model/types.ts";
import { isFetchBaseQueryError } from "@/features/auth/libs/helpers.ts";
import { AUTH_ERRORS, VALIDATION_ERRORS } from "@/features/auth/libs/constants.ts";

export const UserNameValidationOptions = {
  minLength: {
    value: 3,
    message: VALIDATION_ERRORS.USERNAME.MIN_LENGTH,
  },
  required: { value: true, message: VALIDATION_ERRORS.USERNAME.REQUIRED },
  pattern: {
    value: /^[A-Za-z0-9]+$/,
    message: VALIDATION_ERRORS.USERNAME.PATTERN,
  },
};
export const defineApiErrors = (result: IRTKMutationResulT) => {
  if (!result.isUninitialized) {
    const error = result.error;

    if (error && isFetchBaseQueryError(error)) {
      if (error.status === REQUEST_STATUSES.USER_EXIST) {
        return AUTH_ERRORS.EXIST_USERNAME;
      }
      if (error.status === REQUEST_STATUSES.UNAUTHORIZED) {
        return AUTH_ERRORS.UNAUTHORIZED;
      }
    }
  }

  if (result.status === "rejected") {
    return AUTH_ERRORS.SERVER_ERROR;
  }

  return "";
};

export const ConfirmPasswordValidationOptions = (cb: (value: string) => boolean) => {
  return {
    minLength: {
      value: 8,
      message: VALIDATION_ERRORS.CONFIRM_PASSWORD.MIN_LENGTH,
    },
    required: {
      value: true,
      message: VALIDATION_ERRORS.CONFIRM_PASSWORD.REQUIRED,
    },
    validate: (value: string) => cb(value) || VALIDATION_ERRORS.CONFIRM_PASSWORD.COINCIDE_VALIDATE,
    pattern: {
      value: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
      message: VALIDATION_ERRORS.CONFIRM_PASSWORD.PATTERN,
    },
  };
};

import { VALIDATION_ERRORS } from "@/features/auth/libs/constants.ts";

export const emailValidationOptions = {
  required: { value: true, message: VALIDATION_ERRORS.EMAIL.REQUIRED },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: VALIDATION_ERRORS.EMAIL.PATTERN,
  },
};
export const passwordValidationOptions = {
  minLength: {
    value: 3,
    message: VALIDATION_ERRORS.PASSWORD.MIN_LENGTH,
  },
  required: { value: true, message: VALIDATION_ERRORS.PASSWORD.REQUIRED },
  pattern: {
    value: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
    message: VALIDATION_ERRORS.PASSWORD.PATTERN,
  },
};
export const defineFormErrors = (errors) => {
  if (errors.username) {
    return errors.username.message;
  }
  if (errors.email) {
    return errors.email.message;
  }
  if (errors.password) {
    return errors.password.message;
  }
  if (errors.confirmPassword) {
    return errors.confirmPassword.message;
  }
  return "";
};

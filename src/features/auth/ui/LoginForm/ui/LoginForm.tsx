import classes from "./LoginForm.module.scss";
import UiInput from "@/shared/ui/UiInput/UiInput.tsx";
import { defineApiErrors } from "@/features/auth/ui/RegisterForm/model/validations.ts";
import UiButton from "@/shared/ui/UiButton/UiButton.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  defineFormErrors,
  emailValidationOptions,
  passwordValidationOptions,
} from "@/features/auth/model/validations.ts";
import { LoginFormInputs } from "@/features/auth/ui/LoginForm/model/types.ts";
import { useLoginMutation } from "@/entities/auth";

export const LoginForm = () => {
  const [login, result] = useLoginMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = (body) => {
    login(body);
    reset();
  };

  const formErrors = defineFormErrors(errors);
  const apiErrors = defineApiErrors(result);
  return (
    <div className={classes.wrapper}>
      <h3 onClick={handleSubmit(onSubmit)} className={classes.title}>
        Вход в личный кабинет
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.loginForm}>
        {apiErrors && !formErrors && (
          <div className={classes.errorsField}>
            {apiErrors}
            <br />
            <br />
          </div>
        )}
        <UiInput
          placeholder="Введите почту"
          {...register("username", emailValidationOptions)}
        />
        <UiInput
          placeholder="Введите пароль"
          {...register("password", passwordValidationOptions)}
        />
        {formErrors && (
          <div className={classes.errorsField}>
            {formErrors} <br />
            <br />
          </div>
        )}
        <UiButton className={classes.button}>Вход</UiButton>
      </form>
    </div>
  );
};

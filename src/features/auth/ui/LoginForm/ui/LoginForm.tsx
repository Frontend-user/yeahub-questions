import classes from "./LoginForm.module.scss";
import UiInput from "@/shared/ui/UiInput/UiInput.tsx";
import UiButton from "@/shared/ui/UiButton/UiButton.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  defineFormErrors,
  emailValidationOptions,
  passwordValidationOptions,
} from "@/features/auth/model/validations.ts";
import { LoginFormInputs } from "@/features/auth/ui/LoginForm/model/types.ts";
import { setIsAuth, useLoginMutation } from "@/entities/auth";
import { useHandleResponse } from "@/features/auth/hooks/useHandleResponse.ts";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PAGES } from "@/shared/constats/constats.ts";
import { saveCookie } from "@/shared/lib/utils/saveCookie.ts";
import { useAppDispatch } from "@/shared/hooks/useAppSelector.ts";

export const LoginForm = () => {
  const [login, result] = useLoginMutation();

  const dispatch = useAppDispatch()

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
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginFormInputs> = (body) => {
    login(body);
    reset();
  };
  const formErrors = defineFormErrors(errors);
  const { responseError, accessToken } = useHandleResponse(result);
  useEffect(() => {
    if (accessToken) {
      saveCookie("Authorization", `Bearer ${accessToken}`);
      saveCookie("isAuth", "true");
      navigate(`${PAGES.MAIN_PAGE}`);
      dispatch(setIsAuth(true));
    }
  }, [accessToken]);

  return (
    <div className={classes.wrapper}>
      <h3 onClick={handleSubmit(onSubmit)} className={classes.title}>
        Вход в личный кабинет
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.loginForm}>
        {responseError && !formErrors && (
          <div className={classes.errorsField}>
            {responseError}
            <br />
            <br />
          </div>
        )}
        <UiInput placeholder="Введите почту" {...register("username", emailValidationOptions)} />
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

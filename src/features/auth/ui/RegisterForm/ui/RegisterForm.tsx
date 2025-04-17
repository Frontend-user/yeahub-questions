import UiInput from "@/shared/ui/UiInput/UiInput.tsx";
import classes from "./RegisterForm.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import UiButton from "@/shared/ui/UiButton/UiButton.tsx";
import {
  ConfirmPasswordValidationOptions,
  defineApiErrors,
  UserNameValidationOptions,
} from "@/features/auth/ui/RegisterForm/model/validations.ts";
import {
  defineFormErrors,
  emailValidationOptions,
  passwordValidationOptions,
} from "@/features/auth/model/validations.ts";
import { RegisterFormInputs } from "@/features/auth/ui/RegisterForm/model/types.ts";
import { useSignUpMutation } from "@/entities/auth";

export const RegisterForm = () => {
  const [signUp, result] = useSignUpMutation();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<RegisterFormInputs> = (body) => {
    signUp(body);
    reset();
  };

  const isPasswordFieldsCoincidence = () => watch("password") === watch("confirmPassword");
  const formErrors = defineFormErrors(errors);
  const apiErrors = defineApiErrors(result);

  return (
    <div className={classes.wrapper}>
      <h3 onClick={handleSubmit(onSubmit)} className={classes.title}>
        Регистрация
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className={classes.registerForm}>
        {apiErrors && !formErrors && (
          <div className={classes.errorsField}>
            {apiErrors}
            <br />
            <br />
          </div>
        )}
        <UiInput placeholder="Введите имя" {...register("username", UserNameValidationOptions)} />
        <UiInput placeholder="Введите почту" {...register("email", emailValidationOptions)} />
        <UiInput
          placeholder="Введите пароль"
          {...register("password", passwordValidationOptions)}
        />
        <UiInput
          placeholder="Подтвердите пароль"
          {...register(
            "confirmPassword",
            ConfirmPasswordValidationOptions(isPasswordFieldsCoincidence),
          )}
        />
        {formErrors && (
          <div className={classes.errorsField}>
            {formErrors} <br />
            <br />
          </div>
        )}
        <UiButton className={classes.button}>Зарегистрироваться</UiButton>
      </form>
    </div>
  );
};

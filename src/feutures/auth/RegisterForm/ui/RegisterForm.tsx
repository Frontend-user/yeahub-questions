import UiInput from "@/shared/ui/UiInput/UiInput.tsx";
import classes from './RegisterForm.module.scss'
import {useForm, SubmitHandler} from "react-hook-form"
import UiButton from "@/shared/ui/UiButton/UiButton.tsx";
import {RegisterFormInputs} from "@/feutures/auth/RegisterForm/model/types.ts";
import {
    ConfirmPasswordValidationOptions, defineFormErrors, EmailValidationOptions,
    PasswordValidationOptions,
    UserNameValidationOptions
} from "@/feutures/auth/RegisterForm/model/validations.ts";

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<RegisterFormInputs>()
    const onSubmit: SubmitHandler<RegisterFormInputs> = (data) => console.log(data)
    const isPasswordFieldsCoincidence = () => watch('password') === watch('confirmPassword')

    return (
        <div className={classes.wrapper}>
            <h3 className={classes.title}>Регистрация</h3>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.registerForm}>
                <UiInput placeholder="Введите имя" {...register("username", UserNameValidationOptions)} />
                <UiInput placeholder="Введите почту"
                         {...register("email", EmailValidationOptions)} />
                <UiInput type="passwor2d"
                         placeholder="Введите пароль" {...register("password", PasswordValidationOptions(isPasswordFieldsCoincidence))} />
                <UiInput type="passwor2d"
                         placeholder="Подтвердите пароль" {...register("confirmPassword", ConfirmPasswordValidationOptions(isPasswordFieldsCoincidence))} />
                {defineFormErrors(errors) && (<div className={classes.errorsField}>{defineFormErrors(errors)}</div>)}
                <UiButton className={classes.button}>Зарегистрироваться</UiButton>
            </form>
        </div>
    )
        ;
};

export default RegisterForm;
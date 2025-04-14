import classes from './LoginForm.module.scss'
import UiInput from "@/shared/ui/UiInput/UiInput.tsx";
import {
    defineApiErrors,
} from "@/feutures/auth/ui/RegisterForm/model/validations.ts";
import UiButton from "@/shared/ui/UiButton/UiButton.tsx";
import {SubmitHandler, useForm} from "react-hook-form";
import {useLoginMutation} from "@/feutures/auth/ui/LoginForm/api/loginApi.ts";
import {
    defineFormErrors,
    emailValidationOptions,
    passwordValidationOptions
} from "@/feutures/auth/model/validations.ts";
import {LoginFormInputs} from "@/feutures/auth/ui/LoginForm/model/types.ts";

const LoginForm = () => {
    const [login, result] = useLoginMutation()
    const {
        register,
        handleSubmit, reset,
        formState: {errors},
    } = useForm<LoginFormInputs>({
        defaultValues: {
            email: "",
            password: "",
        }
    })
    const onSubmit: SubmitHandler<LoginFormInputs> = (body) => {
        // login(body)
        // reset()
        console.log(body,'body')
    }
    const formErrors = defineFormErrors(errors)
    const apiErrors = defineApiErrors(result)
    return (
        <div className={classes.wrapper}>
            <h3 onClick={handleSubmit(onSubmit)} className={classes.title} >Вход в личный кабинет</h3>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.loginForm}>
                {apiErrors && !formErrors && (
                    <div className={classes.errorsField}>{apiErrors}<br/><br/>    </div>)}
                <UiInput placeholder="Введите почту"
                         {...register("email", emailValidationOptions)} />
                <UiInput
                    placeholder="Введите пароль" {...register("password", passwordValidationOptions)} />
                {formErrors && (<div className={classes.errorsField}>{formErrors} <br/><br/></div>)}
                <UiButton className={classes.button}>Вход</UiButton>
            </form>
        </div>
    );
};

export default LoginForm;
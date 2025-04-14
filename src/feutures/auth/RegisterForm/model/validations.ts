export const UserNameValidationOptions = {
    minLength: {value: 3, message: 'Поле имя должно содержать минимум 3 символа!'},
    required: {value: true, message: 'Введите имя!'},
    pattern: {value: /^[A-Za-z0-9]+$/, message: 'Поле имя должно содержать только буквы и цифры'}
}

export const EmailValidationOptions = {
    required: {value: true, message: 'Введите почту!'},
    pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Введите валидный формат почты!"
    }
}

export const PasswordValidationOptions = (cb: (value: string) => boolean) => {
    return {
        minLength: 3,
        validate: (value: string) => cb(value) || "Подтверждение пароля должно совпадать с полем \"Пароль\"",
        required: {value: true, message: 'Введите пароль!'},
        pattern: {
            value: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
            message: "Поле пароль должна содержать минимум 8 символов, хотя бы одна заглавная буква, одна цифра и один спецсимвол"
        }
    }
}


export const ConfirmPasswordValidationOptions = (cb: (value: string) => boolean) => {
    return {
        minLength: 3,
        required: {value: true, message: 'Заполните поле "Подтверждение пароля"!'},
        validate: (value: string) => cb(value) || "Поле 'Подтверждение пароля' должно совпадать с полем \"Пароль\"",

        pattern: {
            value: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
            message: "Поле \"Подтверждение пароля\" должна содержать минимум 8 символов, хотя бы одна заглавная буква, одна цифра и один спецсимвол"
        }
    }
}

export const defineFormErrors = (errors) => {

    if (errors.username) {
        return errors.username.message
    }
    if (errors.email) {
        return errors.email.message
    }
    if (errors.password) {
        return errors.password.message
    }
    if (errors.confirmPassword) {
        return errors.confirmPassword.message
    }
    return ''
}
export const emailValidationOptions = {
    required: {value: true, message: 'Введите почту!'},
    pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Введите валидный формат почты!"
    }
}
export const passwordValidationOptions = {
    minLength: {value: 3, message: 'Поле пароль должна содержать минимум 8 символов!'},
    required: {value: true, message: 'Введите пароль!'},
    pattern: {
        value: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
        message: "Поле пароль должна содержать минимум 8 символов, хотя бы одна заглавная буква, одна цифра и один спецсимвол"
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
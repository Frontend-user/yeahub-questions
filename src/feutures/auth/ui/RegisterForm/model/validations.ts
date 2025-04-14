import {REQUEST_STATUSES} from "@/shared/constats/constats.ts";

export const UserNameValidationOptions = {
    minLength: {value: 3, message: 'Поле имя должно содержать минимум 3 символа!'},
    required: {value: true, message: 'Введите имя!'},
    pattern: {value: /^[A-Za-z0-9]+$/, message: 'Поле имя должно содержать только буквы и цифры'}
}


export const defineApiErrors = (result) => {
    if (!result.isUninitialized) {
        if (result?.error?.status === REQUEST_STATUSES.USER_EXIST) {
            return 'Пользователь с таким именем или почтой уже существует!'
        }
    }
    if (result.status === "rejected") {
        return 'Ошибка сервера. Попробуйте позже!'
    }
    return  ''
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


export const AUTH_ERRORS = {
  EXIST_USERNAME: "Пользователь с таким именем или почтой уже существует!",
  SERVER_ERROR: "Ошибка сервера. Попробуйте позже!",
  UNAUTHORIZED: "Неверный email или пароль",
};

export const VALIDATION_ERRORS = {
  EMAIL: {
    MIN_LENGTH: "Поле имя должно содержать минимум 3 символа!",
    REQUIRED: "Введите почту!",
    PATTERN: "Введите валидный формат почты!",
  },
  USERNAME: {
    MIN_LENGTH: "Поле имя должно содержать минимум 3 символа!",
    REQUIRED: "Введите имя!",
    PATTERN: "Поле имя должно содержать только буквы и цифры",
  },
  PASSWORD: {
    PATTERN:
      "Поле пароль должна содержать минимум 8 символов, хотя бы одна заглавная буква, одна цифра и один спецсимвол",
    REQUIRED: "Введите пароль!",
    MIN_LENGTH: "Поле пароль должна содержать минимум 8 символов!",
  },
  CONFIRM_PASSWORD: {
    PATTERN:
      'Поле "Подтверждение пароля" должна содержать минимум 8 символов, хотя бы одна заглавная буква, одна цифра и один спецсимвол',
    REQUIRED: 'Заполните поле "Подтверждение пароля"!',
    MIN_LENGTH:
      'Поле "Подтверждение пароля" должна содержать минимум 8 символов!',
    COINCIDE_VALIDATE:
      "Поле 'Подтверждение пароля' должно совпадать с полем \"Пароль\"",
  },
};

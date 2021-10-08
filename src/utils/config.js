export const validateConfig = {
  name: {
    isRequired: { message: 'Поле "Имя" обязательно для заполнения'}
  },
  surname: {
    isRequired: { message: 'Поле "Фамилия" обязательно для заполнения' }
  },
  yearOfBirth: {
    isRequired: { message: 'Поле "Год рождения" обязательно для заполнения' },
    isCorrectLight: { message: 'Год должен содержать 4 цифры', value: 4 },
    isCorrectYear: { message: 'Год должен быть корректным' }
  },
  portfolio: {
    isRequired: { message: 'Поле "Портфолио" обязательно для заполнения' },
    isCorrectUrl: { message: 'Ссылка должна быть корректна' }
  }
}
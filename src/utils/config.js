export const validateConfig = {
  name: {
    isRequired: { message: 'Поле "Имя" обязательно для заполнения'}
  },
  surname: {
    isRequired: { message: 'Поле "Фамилия" обязательно для заполнения' }
  },
  yearOfBirth: {
    isRequired: { message: 'Поле "Год рождения" обязательно для заполнения' }
  },
  portfolio: {
    isRequired: { message: 'Поле "Портфолио" обязательно для заполнения' }
  }
}
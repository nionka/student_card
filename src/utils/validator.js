export function validator (data, config) {
  const errors = {};

  const validate = (validateMethod, data, config) => {
    let statusValidate;

    switch (validateMethod) {
      case 'isRequired' :
        statusValidate = data.trim() === '';
        break;
      case 'isCorrectLight':
        statusValidate = data.length !== config.value;
        break;
      case 'isCorrectYear':
        const currentYear = new Date().getFullYear();
        statusValidate = currentYear < Number(data);
        break;
      case 'isCorrectUrl':
        const urlRegExp = /http(s?):\/\/[-\w\.]{3,}\.[A-Za-z]{2,3}/;
        statusValidate = !urlRegExp.test(data);
        break;
      default:
        break;
    }

    if (statusValidate) return config.message;
  }

  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(validateMethod, data[fieldName], config[fieldName][validateMethod]);

      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }

  return errors;
};
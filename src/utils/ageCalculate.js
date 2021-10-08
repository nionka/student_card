export const ageCalculate = (year) => {
  const currentYear = new Date().getFullYear();

  const age = currentYear - Number(year);

  const ed = age%10;
  const des = Math.floor(age / 10);

  let text = 'лет';

  if (des !== ed && ed === 1) {
    text = 'год';
  } else if (des !== 1 && ed >= 2 && ed <= 4) {
    text = 'года';
  }

  return `${age} ${text}`;
}

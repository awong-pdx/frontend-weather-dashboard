// eslint-disable-next-line import/prefer-default-export
export const validate = (input, setErrorMessage) => {
  let validated = false;
  const regex = /^[\p{L}]+(?:[\s-][\p{L}]+)*$/u;
  if (input.trim() === '') {
    setErrorMessage('Please enter a city.');
  } else if (regex.test(input) === false) {
    console.log(regex.test(input));
    setErrorMessage('Please enter a valid city name.');
  } else {
    setErrorMessage('');
    validated = true;
  }

  return validated;
};

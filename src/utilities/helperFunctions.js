// eslint-disable-next-line import/prefer-default-export
export const validate = (input, setErrorMessage) => {
  let validated = false;
  // A city name must include at least one unicode letter, and may include numbers and spaces
  const regex = /^(?=.*\p{L})[\p{L}0-9]+(?:[ -][\p{L}0-9]+)*$/u;
  if (input.trim() === '') {
    setErrorMessage('Please enter a city.');
  } else if (regex.test(input) === false) {
    setErrorMessage('Please enter a valid city name.');
  } else {
    setErrorMessage('');
    validated = true;
  }

  return validated;
};

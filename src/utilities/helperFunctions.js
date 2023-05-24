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

export const toCapitalized = function capitalizeString(str) {
  if (!str) return '';

  const words = str.split(' ');
  const capitalizedWords = words.map(
    (word) => `${word.charAt(0).toUpperCase()}${word.substring(1)}`
  );

  return capitalizedWords.join(' ');
};

// returns a date in local time (GMT +/- local timezone)
export const toLocalDate = function convertTimestampToLocalDate(timestamp) {
  return new Date(timestamp * 1000);
};

export const getHourString = function getFormattedHourStringFromDate(
  date,
  timezone
) {
  // const localHoursIn24Format = date.getHours();
  // const hoursIn24Format = date.getHours();
  const localTime = date.getHours();
  const localGMTOffsetInHours = date.getTimezoneOffset() / 60;
  const cityGMTOffsetInHours = timezone / 3600;
  const cityTime =
    (localGMTOffsetInHours + cityGMTOffsetInHours + localTime) % 24;
  let hourString;

  if (cityTime < 12) {
    if (cityTime === 0) hourString = 'midnight';
    else hourString = `${cityTime} am`;
  } else if (cityTime > 12) {
    if (cityTime === 12) hourString = 'noon';
    else hourString = `${cityTime - 12} pm`;
  }

  return hourString;
};

export const getIconSrc = function getWeatherIconSrcURL(iconId) {
  return `https://openweathermap.org/img/wn/${iconId}@2x.png`;
};

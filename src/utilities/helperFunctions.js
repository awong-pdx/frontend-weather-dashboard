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
    (word) =>
      `${word.charAt(0).toUpperCase()}${
        word.length > 1 ? word.substring(1) : ''
      }`
  );

  return capitalizedWords.join(' ');
};

// returns a date in local time (GMT +/- local timezone)
export const toLocalDate = function convertTimestampToLocalDate(timestamp) {
  return new Date(timestamp * 1000);
};

// returns an hour string (12-hour format) in the city's local time
export const getHourString = function getFormattedHourStringFromDate(
  date,
  timezone
) {
  const UTCTimeInHours = date.getUTCHours();
  const secondsInHour = 3600;
  const cityUTCOffsetInHours = timezone / secondsInHour;
  // rounding to correct for unusual timezones, i.e. UTC +3:30
  let cityTime = Math.round(UTCTimeInHours + cityUTCOffsetInHours);
  if (cityTime < 0) cityTime += 24;
  else if (cityTime > 23) cityTime %= 24;
  let hourString;

  if (cityTime < 12) {
    if (cityTime === 0) hourString = '12 am';
    else hourString = `${cityTime} am`;
  } else if (cityTime > 11) {
    if (cityTime === 12) hourString = '12 pm';
    else hourString = `${cityTime - 12} pm`;
  }

  return hourString;
};

export const getIconSrc = function getWeatherIconSrcURL(iconId) {
  return `https://openweathermap.org/img/wn/${iconId}@2x.png`;
};

export const getCurrentTime = () => {
  const currentTime = new Date();
  return currentTime.toLocaleTimeString('en-US');
};

export const getCurrentDate = () => {
  const currentDate = new Date();

  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  return currentDate.toLocaleDateString('en-US', options);
};

export const getTimeNoSec = (timestamp) => {
  const currentTime = new Date(timestamp * 1000);
  const currentMinute = currentTime.getMinutes();
  let currentHour = currentTime.getHours();
  let period = 'AM';

  if (currentHour >= 12) {
    period = 'PM';
    if (currentHour > 12) {
      currentHour -= 12;
    }
  }

  return `${currentHour}:${currentMinute} ${period}`;
};

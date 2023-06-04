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
    if (cityTime === 0) hourString = '12 AM';
    else hourString = `${cityTime} AM`;
  } else if (cityTime > 11) {
    if (cityTime === 12) hourString = '12 PM';
    else hourString = `${cityTime - 12} PM`;
  }

  return hourString;
};

export const getIconSrc = function getWeatherIconSrcURL(iconId) {
  return `https://openweathermap.org/img/wn/${iconId}@2x.png`;
};

export const getIconFromSrc = function getWeatherIconSrcPath(
  { id, icon },
  animated = false
) {
  const SVGType = animated ? `animated` : `static`;
  const srcType = `src/images/weather-conditions/${SVGType}/`;
  const iconStringMatches = [];
  let srcString = '';
  let iconStringMatch = '';

  const iconNames = {
    'thunderstorms-rain': [200, 201, 202, 230, 231, 232],
    thunderstorms: [210, 211, 212, 221],
    drizzle: [
      300, 301, 302, 310, 311, 312, 313, 314, 321, 520, 521, 522, 531, 804,
    ],
    rain: [500, 501, 502, 503, 504],
    sleet: [511, 611, 612, 613, 615, 616],
    snow: [600, 601, 602, 620, 621, 622],
    mist: [701],
    smoke: [711, 762],
    haze: [721],
    'dust-wind': [731, 751],
    dust: [761],
    wind: [771],
    tornado: [781],
    'clear-day': [800],
    'clear-night': [800],
    'partly-cloudy-day': [801],
    'partly-cloudy-night': [801],
    cloudy: [802],
    'overcast-day': [803],
    'overcast-night': [803],
  };

  Object.entries(iconNames).forEach(([key, value]) => {
    if (value.includes(icon)) iconStringMatches.push(key);
  });

  if (iconStringMatches) {
    if (iconStringMatches.length > 1) {
      if (iconStringMatches.includes('clear-day')) {
        if (id === '01d') {
          iconStringMatch = 'clear-day';
        } else {
          iconStringMatch = 'clear-night';
        }
      } else if (iconStringMatches.includes('partly-cloudy-day')) {
        if (id === '02d') {
          iconStringMatch = 'partly-cloudy-day';
        } else {
          iconStringMatch = 'partly-cloudy-night';
        }
      } else if (iconStringMatches.includes('cloudy')) {
        if (id === '03d') {
          iconStringMatch = 'cloudy';
        }
      } else if (iconStringMatches.includes('overcast-day')) {
        if (id === '04d') {
          iconStringMatch = 'overcast-day';
        } else {
          iconStringMatch = 'overcast-night';
        }
      }
    } else {
      [iconStringMatch] = iconStringMatches;
    }

    srcString = `${srcType}${iconStringMatch}.svg`;
  }

  return srcString;
};

// time depends on system settings
export const getCurrentTime = () => {
  const currentTime = new Date();
  return currentTime.toLocaleTimeString('en-US');
};

// time depends on system settings
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

export const getHourAndMinString = (date, timezone) => {
  const currentTimeUnadjusted = new Date((date + timezone) * 1000);
  const currentMinute = currentTimeUnadjusted
    .getUTCMinutes()
    .toString()
    .padStart(2, '0');
  let currentHour = currentTimeUnadjusted.getUTCHours();

  let period = 'AM';

  if (currentHour >= 12) {
    period = 'PM';
    if (currentHour > 12) {
      currentHour -= 12;
    }
  }

  return `${currentHour}:${currentMinute} ${period}`;
};

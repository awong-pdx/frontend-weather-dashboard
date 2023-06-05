import {
  ClearDay,
  ClearNight,
  Cloudy,
  Drizzle,
  DustWind,
  Dust,
  Fog,
  Mist,
  OvercastDay,
  OvercastNight,
  PartlyCloudyDay,
  PartlyCloudyNight,
  Rain,
  Sleet,
  Smoke,
  Snow,
  ThunderstormsRain,
  Thunderstorms,
  Tornado,
  Wind,
} from '../images/weather-conditions/weatherConditionImages';

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
  { id, icon } // animated = false
) {
  // const SVGType = animated ? `animated` : `static`;
  // const srcType = `src/images/weather-conditions/${SVGType}/`;
  const iconMatches = [];
  // let srcString = '';
  let iconMatch = '';

  const iconNames = {
    ThunderstormsRain: [200, 201, 202, 230, 231, 232],
    Thunderstorms: [210, 211, 212, 221],
    Drizzle: [
      300, 301, 302, 310, 311, 312, 313, 314, 321, 520, 521, 522, 531, 804,
    ],
    Rain: [500, 501, 502, 503, 504],
    Sleet: [511, 611, 612, 613, 615, 616],
    Snow: [600, 601, 602, 620, 621, 622],
    Mist: [701],
    Smoke: [711, 762],
    Haze: [721],
    DustWind: [731, 751],
    Dust: [761],
    Wind: [771],
    Tornado: [781],
    ClearDay: [800],
    ClearNight: [800],
    PartlyCloudyDay: [801],
    PartlyCloudyNight: [801],
    Cloudy: [802],
    OvercastDay: [803],
    OvercastNight: [803],
  };

  Object.entries(iconNames).forEach(([key, value]) => {
    if (value.includes(id)) iconMatches.push(key);
  });

  if (iconMatches) {
    if (iconMatches.includes(ClearDay)) {
      if (icon === '01d') {
        iconMatch = ClearDay;
      } else {
        iconMatch = ClearNight;
      }
    } else if (iconMatches.includes(PartlyCloudyDay)) {
      if (icon === '02d') {
        iconMatch = PartlyCloudyDay;
      } else {
        iconMatch = PartlyCloudyNight;
      }
    } else if (iconMatches.includes(Cloudy)) {
      if (icon === '03d') {
        iconMatch = Cloudy;
      }
    } else if (iconMatches.includes(OvercastDay)) {
      if (icon === '04d') {
        iconMatch = OvercastDay;
      } else {
        iconMatch = OvercastNight;
      }
    } else if (iconMatches.includes(Drizzle)) {
      iconMatch = Drizzle;
    } else if (iconMatches.includes(DustWind)) {
      iconMatch = DustWind;
    } else if (iconMatches.includes(Dust)) {
      iconMatch = Dust;
    } else if (iconMatches.includes(Fog)) {
      iconMatch = Fog;
    } else if (iconMatches.includes(Mist)) {
      iconMatch = Mist;
    } else if (iconMatches.includes(Rain)) {
      iconMatch = Rain;
    } else if (iconMatches.includes(Sleet)) {
      iconMatch = Sleet;
    } else if (iconMatches.includes(Snow)) {
      iconMatch = Snow;
    } else if (iconMatches.includes(Smoke)) {
      iconMatch = Smoke;
    } else if (iconMatches.includes(ThunderstormsRain)) {
      iconMatch = ThunderstormsRain;
    } else if (iconMatches.includes(Thunderstorms)) {
      iconMatch = Thunderstorms;
    } else if (iconMatches.includes(Tornado)) {
      iconMatch = Tornado;
    } else if (iconMatches.includes(Wind)) {
      iconMatch = Wind;
    }
    // [iconMatch] = iconMatches;
    // }

    // srcString = `${srcType}${iconMatch}.svg`;
  }

  return iconMatch;
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

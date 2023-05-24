import React from 'react';
import { useWeather } from './WeatherProvider';

const toCapitalized = function capitalizeString(str) {
  if (!str) return '';
  const words = str.split(' ');
  const capitalizedWords = words.map(
    (word) => `${word.charAt(0).toUpperCase()}${word.substring(1)}`
  );
  return capitalizedWords.join(' ');
};

const toLocalDate = function convertTimestampToHour(timestamp) {
  return new Date(timestamp * 1000);
};

const getHourString = function getHourFromDate(date) {
  const hoursIn24Format = date.getHours();
  let hourString;
  if (hoursIn24Format < 12) {
    if (hoursIn24Format === 0) hourString = 'midnight';
    else hourString = `${hoursIn24Format} am`;
  } else if (hoursIn24Format > 12) {
    if (hoursIn24Format === 12) hourString = 'noon';
    else hourString = `${hoursIn24Format - 12} pm`;
  }
  return hourString;
  // return date.getHours() > 12 ? `${date.getHours() - 12}` : date.getHours();
};

const getIconSrc = function getWeatherIconSrc(iconId) {
  return `https://openweathermap.org/img/wn/${iconId}@2x.png`;
};

export default function WeatherSummary() {
  const { currentWeather, hourlyWeather } = useWeather();
  if (!(currentWeather && hourlyWeather)) return null;

  const summaryHeader = `${currentWeather.name}, ${currentWeather.sys.country}`;
  const summaryIconURL = getIconSrc(currentWeather.weather[0].icon);
  const summaryIconAltText = `An icon representing ${currentWeather.weather[0].description}`;
  //   const summaryIcon = (
  //     <img
  //       className="img-fluid"
  //       src={summaryIconURL}
  //       alt={summaryIconAltDescription}
  //     />
  //   );
  const summaryDescription = `${toCapitalized(
    currentWeather.weather[0].description
  )}`;
  const summaryTemperature = `${currentWeather.main.temp}°`;

  //   const getHourly = function getWeatherForHour(weatherForHour) {
  //     return weatherForHour.weather[0].description;
  //   };

  const hourlyForecast = hourlyWeather.list
    .slice(0, 4)
    .map((weatherForHour) => (
      <div key={weatherForHour.dt} className="row align-items-center">
        <div className="col">
          {getHourString(toLocalDate(weatherForHour.dt))}
        </div>
        <div className="col">
          <img
            src={getIconSrc(weatherForHour.weather[0].icon)}
            alt={`An icon representing ${weatherForHour.weather[0].description}`}
          />
        </div>
      </div>
    ));

  return (
    <div className="container text-center border border-primary rounded">
      <h3 className="row justify-content-center">{summaryHeader}</h3>
      <img src={summaryIconURL} alt={summaryIconAltText} />
      <h4 className="row justify-content-center">{summaryDescription}</h4>
      <h4 className="row justify-content-center">{summaryTemperature}</h4>
      {hourlyForecast}
    </div>
  );
}

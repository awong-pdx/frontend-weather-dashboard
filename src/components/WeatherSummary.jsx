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

const toLocalDate = function convertTimestampTo24Hour(timestamp) {
  return new Date(timestamp * 1000);
};

const getHourString = function getFormattedHourStringFromDate(date) {
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
  const summaryDescription = `${toCapitalized(
    currentWeather.weather[0].description
  )}`;
  const summaryTemperature = `${Math.round(currentWeather.main.temp)}°`;

  const hourlyForecast = hourlyWeather.list
    .slice(0, 4)
    .map((weatherForHour) => (
      <div key={weatherForHour.dt} className="row align-items-center">
        <div className="col" />
        <div className="col fs-4">
          {getHourString(toLocalDate(weatherForHour.dt))}
        </div>
        <div className="col">
          <img
            src={getIconSrc(weatherForHour.weather[0].icon)}
            alt={`An icon representing ${weatherForHour.weather[0].description}`}
          />
        </div>
        <div className="col" />
      </div>
    ));

  return (
    <div className="weather-summary container py-4 text-center border border-primary rounded">
      <h2 className="row justify-content-center fs-1">{summaryHeader}</h2>
      <h3 className="row justify-content-center fs-1">{summaryTemperature}</h3>
      <img
        src={summaryIconURL}
        alt={summaryIconAltText}
        height="200px"
        width="200px"
      />
      <h3 className="row justify-content-center fs-2 mb-2">
        {summaryDescription}
      </h3>
      {hourlyForecast}
    </div>
  );
}

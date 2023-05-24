import React from 'react';
import { useWeather } from './WeatherProvider';
import {
  toCapitalized,
  toLocalDate,
  getHourString,
  getIconSrc,
} from '../utilities/helperFunctions';

export default function SummaryWeather() {
  const { currentWeather, hourlyWeather } = useWeather();
  if (!(currentWeather && hourlyWeather)) return null;

  const { timezone } = currentWeather;
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
          {getHourString(toLocalDate(weatherForHour.dt), timezone)}
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
    <div className="summary-weather container py-4 text-center border border-primary rounded">
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

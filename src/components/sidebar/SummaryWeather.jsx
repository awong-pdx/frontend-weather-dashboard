import React from 'react';
import { useWeather } from '../WeatherProvider';
import {
  toCapitalized,
  toLocalDate,
  getHourString,
  getIconSrc,
  getIconFromSrc,
} from '../../utilities/helperFunctions';

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
    .slice(0, 5)
    .map((weatherForHour) => (
      <div key={weatherForHour.dt} className="summary-font-4">
        {getHourString(toLocalDate(weatherForHour.dt), timezone)}
        <img
          // src={getIconSrc(weatherForHour.weather[0].icon)}
          src={getIconFromSrc(weatherForHour.weather[0])}
          // src={Rain}
          // src/images/weather-conditions/static/clear-day.svg
          alt={`An icon representing ${weatherForHour.weather[0].description}`}
        />
      </div>
    ));

  return (
    <section className="summary-weather m-auto rounded">
      <h1 className="summary-font-1">{summaryHeader}</h1>
      <p className="summary-font-1">{summaryTemperature}</p>
      <div className="summary-image">
        <img
          className="img-fluid"
          src={summaryIconURL}
          height="200"
          width="200"
          alt={summaryIconAltText}
        />
      </div>
      <p className="summary-description mb-2 summary-font-2">
        {summaryDescription}
      </p>
      <hr />
      <div className="summary-hourly">
        <h2 className="visually-hidden">Hourly Forecast</h2>
        {hourlyForecast}
      </div>
    </section>
  );
}

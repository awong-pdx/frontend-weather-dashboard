import React from 'react';
import { useWeather } from '../WeatherProvider';
import {
  toCapitalized,
  toLocalDate,
  getHourString,
  getIconName,
} from '../../utilities/helperFunctions';
import getImageByKey from '../../images/weather-conditions/getImageByKey';

export default function SummaryWeather() {
  const { currentWeather, hourlyWeather } = useWeather();
  if (!(currentWeather && hourlyWeather)) return null;

  const { timezone } = currentWeather;
  const summaryHeader = `${currentWeather.name}, ${currentWeather.sys.country}`;
  const summaryIconAltText = `An icon representing ${currentWeather.weather[0].description}`;
  const summaryDescription = `${toCapitalized(
    currentWeather.weather[0].description
  )}`;
  const summaryTemperature = `${Math.round(currentWeather.main.temp)}°`;

  const hourlyForecast = hourlyWeather.list
    .slice(0, 5)
    .map((weatherForHour) => (
      <div
        key={weatherForHour.dt}
        className="summary-font-4 row summary-hourly-row"
      >
        <div className="summary-hourly-col-left col">
          <span>{getHourString(toLocalDate(weatherForHour.dt), timezone)}</span>
        </div>
        <div className="summary-hourly-col-image col">
          <img
            src={getImageByKey(getIconName(weatherForHour.weather[0]))}
            alt={`An icon representing ${weatherForHour.weather[0].description}`}
            className="summary-hourly-image "
          />
        </div>
        <div className="summary-hourly-col-right col">
          <span>{`${Math.round(weatherForHour.main.temp)}°`}</span>
        </div>
      </div>
    ));

  return (
    <section className="summary-weather m-auto rounded">
      <div className="summary-top text-center">
        <h1 className="summary-font-1">{summaryHeader}</h1>
        <p className="summary-font-1">{summaryTemperature}</p>
        <div className="summary-image">
          <img
            className="img-fluid"
            src={getImageByKey(getIconName(currentWeather.weather[0], true))}
            height="200"
            width="200"
            alt={summaryIconAltText}
          />
        </div>
        <p className="summary-description mb-2 summary-font-2">
          {summaryDescription}
        </p>
      </div>
      <hr />
      <div className="summary-hourly">
        <h2 className="visually-hidden">Hourly Forecast</h2>
        {hourlyForecast}
      </div>
    </section>
  );
}

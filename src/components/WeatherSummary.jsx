import React from 'react';
import { useWeather } from './WeatherProvider';

export default function WeatherSummary() {
  const { currentWeather, hourlyWeather } = useWeather();
  if (!(currentWeather && hourlyWeather)) return null;
  return (
    <div className="container text-center border border-primary rounded">
      <div className="row justify-content-center">
        {`${currentWeather.name}, ${currentWeather.sys.country}`}
      </div>
      <div className="row">
        <img
          src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
          alt={`An icon representing ${currentWeather.weather.description}`}
        />
      </div>
      <div className="row justify-content-center">{`${currentWeather.weather[0].description}`}</div>
      <div className="row justify-content-center">{`${currentWeather.main.temp}°`}</div>
      <div className="row">
        <div className="col">
          {`${hourlyWeather.list[0].weather[0].description}`}
        </div>
        <div className="col">
          {`${hourlyWeather.list[0].weather[0].description}`}
        </div>
      </div>
      <div className="row">
        <div className="col">
          {`${hourlyWeather.list[1].weather[0].description}`}
        </div>
        <div className="col">
          {`${hourlyWeather.list[1].weather[0].description}`}
        </div>
      </div>
      <div className="row">
        <div className="col">
          {`${hourlyWeather.list[2].weather[0].description}`}
        </div>
        <div className="col">
          {`${hourlyWeather.list[2].weather[0].description}`}
        </div>
      </div>
      <div className="row">
        <div className="col">
          {`${hourlyWeather.list[3].weather[0].description}`}
        </div>
        <div className="col">
          {`${hourlyWeather.list[3].weather[0].description}`}
        </div>
      </div>
    </div>
  );
}

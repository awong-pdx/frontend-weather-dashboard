import React from 'react';
import { useWeather } from '../../WeatherProvider';
import windIcon from '../../../images/wind.png';

const d2d = require('degrees-to-direction');

export default function WindStatus() {
  const { currentWeather } = useWeather();
  if (!currentWeather) return null;

  const { speed, deg } = currentWeather.wind;
  const cardinalDirection = d2d(deg);

  return (
    <div className="weather-detail col-4 border border-primary rounded">
      <div className="weather-detail-header pt-2">
        <h4>Wind</h4>
        <img
          src={windIcon}
          className="wind-icon"
          alt="Icon representing wind"
          width="30px"
          height="30px"
        />
      </div>
      <div className="text-center mt-2">
        <h1>{`${speed} mph`}</h1>
        <p className="mb-1">Direction: {cardinalDirection}</p>
        <p>Degree: {deg}°</p>
      </div>
    </div>
  );
}

import React from 'react';
import { useWeather } from '../../WeatherProvider';

export default function Pressure() {
  const { currentWeather } = useWeather();
  if (!currentWeather) return null;

  const { pressure } = currentWeather.main;

  // REMOVE LATER!
  console.log(pressure);

  return (
    <div className="weather-detail col-4 border border-primary rounded">
      <div className="weather-detail-header pt-2">
        <h4>Pressure</h4>
      </div>
    </div>
  );
}

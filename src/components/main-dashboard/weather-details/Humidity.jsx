import React from 'react';
import { useWeather } from '../../WeatherProvider';
import humidityIcon from '../../../images/humidityIcon.png';

export default function Humidity() {
  const { currentWeather } = useWeather();
  if (!currentWeather) return null;

  const { humidity } = currentWeather.main;

  // DELETE LATER
  console.log(humidity);

  return (
    <div className="col-4 border border-primary rounded">
      <div className="humidity-header pt-2">
        <h3>Humidity</h3>
        <img
          src={humidityIcon}
          alt="Icon representing humidity"
          width="35px"
          height="35px"
        />
      </div>
    </div>
  );
}

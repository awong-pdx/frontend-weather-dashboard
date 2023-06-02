import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import { useWeather } from '../../WeatherProvider';
import humidityIcon from '../../../images/humidityIcon.png';

export default function Humidity() {
  const { currentWeather } = useWeather();
  if (!currentWeather) return null;
  let humidityDescription = 'Ideal humidity levels';

  const { humidity } = currentWeather.main;
  if (humidity >= 70 || humidity < 25) {
    humidityDescription = 'Poor humidity levels';
  } else if (
    (humidity < 70 && humidity >= 60) ||
    (humidity >= 25 && humidity < 30)
  ) {
    humidityDescription = 'Fair humidity levels';
  }

  return (
    <div className="col-4 border border-primary rounded pb-2">
      <div className="humidity-header pt-2">
        <h4>Humidity</h4>
        <img
          src={humidityIcon}
          alt="Icon representing humidity"
          width="35px"
          height="35px"
        />
      </div>
      <div className="text-center">
        <h2>{`${humidity}% `}</h2>
        <p>{humidityDescription}</p>
      </div>
      <ProgressBar completed={`${humidity}`} animateOnRender="true" />
    </div>
  );
}

import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import { useWeather } from '../../WeatherProvider';
import humidityIcon from '../../../images/humidityIcon.png';

export default function Humidity() {
  const { currentWeather } = useWeather();
  if (!currentWeather) return null;
  let humidityDescription = 'Ideal humidity levels';
  let humidityBarColor = '#28a745'; // default to green color

  const { humidity } = currentWeather.main;
  if (humidity >= 70 || humidity < 25) {
    humidityDescription = 'Poor humidity levels';
    humidityBarColor = '#dc3545';
  } else if (
    (humidity < 70 && humidity >= 60) ||
    (humidity >= 25 && humidity < 30)
  ) {
    humidityDescription = 'Fair humidity levels';
    humidityBarColor = '#ffc107';
  }

  return (
    <div className="humidity col-4 border border-primary rounded pb-3">
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
        <h1>{`${humidity}% `}</h1>
        <p>{humidityDescription}</p>
      </div>
      <ProgressBar
        completed={`${humidity}`}
        animateOnRender="true"
        bgColor={humidityBarColor}
      />
    </div>
  );
}

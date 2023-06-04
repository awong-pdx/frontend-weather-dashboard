import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import { useWeather } from '../../WeatherProvider';
import humidityIcon from '../../../images/humidity.png';

export default function Humidity() {
  const { currentWeather } = useWeather();
  if (!currentWeather) return null;

  const red = '#dc3545';
  const yellow = '#ffc107';
  const poorLevels = 'Poor humidity levels';
  const fairLevels = 'Fair humidity levels';

  // default description and color (green)
  let humidityDescription = 'Ideal humidity levels';
  let humidityBarColor = '#28a745';

  const { humidity } = currentWeather.main;
  if (humidity >= 70 || humidity < 25) {
    humidityDescription = poorLevels;
    humidityBarColor = red;
  } else if (
    (humidity < 70 && humidity >= 60) ||
    (humidity >= 25 && humidity < 30)
  ) {
    humidityDescription = fairLevels;
    humidityBarColor = yellow;
  }

  return (
    <div className="weather-detail col-4 border border-primary rounded pb-3">
      <div className="weather-detail-header pt-2">
        <h4>Humidity</h4>
        <img
          src={humidityIcon}
          className="humidity-icon"
          alt="Icon representing humidity"
          width="27px"
          height="27px"
        />
      </div>
      <div className="text-center">
        <h1>{`${humidity}% `}</h1>
        <p>{humidityDescription}</p>
      </div>
      <ProgressBar
        completed={`${humidity}`}
        animateOnRender
        bgColor={humidityBarColor}
        labelColor="black"
      />
    </div>
  );
}

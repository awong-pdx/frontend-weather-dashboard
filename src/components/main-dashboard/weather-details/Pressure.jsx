import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useWeather } from '../../WeatherProvider';
import 'react-circular-progressbar/dist/styles.css';

export default function Pressure() {
  const { currentWeather } = useWeather();
  if (!currentWeather) return null;

  const percentage = 1100;

  const { pressure } = currentWeather.main;

  // REMOVE LATER!
  console.log(pressure);

  return (
    <div className="weather-detail col-4 border border-primary rounded">
      <div className="weather-detail-header pt-2">
        <h4>Pressure</h4>
      </div>
      <div className="text-center">
        <CircularProgressbar
          className="pressure-gauge"
          circleRatio={0.75}
          value={percentage}
          minValue={500}
          maxValue={1200}
          text={`${percentage}hPa`}
          styles={buildStyles({
            rotation: 1 / 2 + 1 / 8,
            strokeLinecap: 'butt',
            trailColor: '#eee',
          })}
        />
      </div>
    </div>
  );
}

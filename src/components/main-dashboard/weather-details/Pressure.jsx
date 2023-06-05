import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useWeather } from '../../WeatherProvider';
import 'react-circular-progressbar/dist/styles.css';
import pressureIcon from '../../../images/barometer.png';

export default function Pressure() {
  const { currentWeather } = useWeather();
  if (!currentWeather) return null;
  const { pressure } = currentWeather.main;

  return (
    <div className="weather-detail col-4 border border-primary rounded">
      <div className="weather-detail-header pt-2">
        <h4>Pressure</h4>
        <img
          src={pressureIcon}
          className="pressure-icon"
          alt="Icon representing atmospheric pressure"
          width="30px"
          height="30px"
        />
      </div>
      <div className="center-pressure-gauge">
        <div className="pressure-gauge-container">
          <CircularProgressbar
            className="pressure-gauge"
            circleRatio={0.75}
            value={pressure}
            minValue={980}
            maxValue={1050}
            text={`${pressure}hPa`}
            strokeWidth={6}
            styles={buildStyles({
              rotation: 1 / 2 + 1 / 8,
              strokeLinecap: 'butt',
              trailColor: '#eee',
              textColor: '#000',
              textSize: '21px',
            })}
          />
        </div>
      </div>
    </div>
  );
}

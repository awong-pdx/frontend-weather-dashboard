import React from 'react';
import getImageByKey from './images/weather-conditions/getImageByKey';
import { getIconName } from './utilities/helperFunctions';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function CreateDailyWeather({ weatherInfo }) {
  const { timestamp, minTemperature, maxTemperature, weatherDescription } =
    weatherInfo;

  const today = new Date(timestamp * 1000);
  const currentDay = today.getDay();
  const currentMonth = today.getMonth();
  const currentDayOfMonth = today.getDate();

  const minTemp = Math.round(minTemperature);
  const maxTemp = Math.round(maxTemperature);

  return (
    <div className="col-md daily-weather main-dashboard-detail rounded text-center m-1">
      <h5>{daysOfWeek[currentDay]}</h5>
      <p>
        {currentMonth + 1}/{currentDayOfMonth}
      </p>
      <img
        src={getImageByKey(getIconName(weatherInfo, true))}
        alt={`Weather icon representing ${weatherDescription}`}
      />
      <p>
        <span className="dashboard-text-secondary">{minTemp}° </span>/ {maxTemp}
        °
      </p>
    </div>
  );
}

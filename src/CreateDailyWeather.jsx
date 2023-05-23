import React from 'react';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function CreateDailyWeather({ info }) {
  const weatherIconURL = `https://openweathermap.org/img/wn/${info.iconKey}@2x.png`;
  
  const today = new Date(info.timestamp * 1000);
  const currentDay = today.getDay();
  const currentMonth = today.getMonth();
  const currentDayOfMonth = today.getDate();

  const minTemp = Math.round(info.minTemperature);
  const maxTemp = Math.round(info.maxTemperature);

  return (
    <div className="col border border-primary rounded text-center m-1">
      <h5>{daysOfWeek[currentDay]}</h5>
      <p>
        {currentMonth + 1}/{currentDayOfMonth}
      </p>
      <img
        src={weatherIconURL}
        alt={`Weather icon representing ${info.weatherDescription}`}
      />
      <p>
        <span className="text-secondary">{minTemp}° </span>/ {maxTemp}°
      </p>
    </div>
  );
}

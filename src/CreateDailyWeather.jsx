import React from 'react';

export default function CreateDailyWeather({ info }) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const weatherIconURL = `https://openweathermap.org/img/wn/${info.iconKey}@2x.png`;

  const today = new Date(info.timestamp * 1000);
  const currentDay = today.getDay();

  return (
    <div className="col border border-primary rounded text-center m-1">
      <h4>{daysOfWeek[currentDay]}</h4>
      <img src={weatherIconURL} alt="Icon representing the current weather" />
      <h5>{Math.round(info.temperature)}°</h5>
    </div>
  );
}

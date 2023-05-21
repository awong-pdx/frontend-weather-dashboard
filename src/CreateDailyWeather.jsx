import React from 'react';

export default function CreateDailyWeather(timestamp, temp, iconKey) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const weatherIconURL = `ttps://openweathermap.org/img/wn/${iconKey}@2x.png`;

  const today = new Date();
  const currentDay = today.getDay(timestamp);

  return (
    <div className="col">
      <p>{daysOfWeek[currentDay]}</p>
      <img src={weatherIconURL} alt="Icon representing the current weather" />
      <p>{temp}</p>
    </div>
  );
}

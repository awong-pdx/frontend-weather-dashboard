import React, { useEffect, useState } from 'react';
import { useWeather } from './WeatherProvider';
import CreateDailyWeather from '../CreateDailyWeather';

export default function DailyWeather() {
  const { dailyWeather } = useWeather();
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    if (dailyWeather) {
      const { list } = dailyWeather;
      const dailyWeatherInfo = list.map((weatherData, index) => {
        const weatherObj = {
          id: index,
          timestamp: weatherData.dt,
          minTemperature: weatherData.temp.min,
          maxTemperature: weatherData.temp.max,
          iconKey: weatherData.weather[0].icon,
        };
        return weatherObj;
      });
      setWeather(dailyWeatherInfo);
    }
  }, [dailyWeather]);

  if (weather.length === 0) {
    return null;
  }

  return (
    <div className="container-fluid">
      <h1>Testing Daily Weather</h1>
      <div className="row">
        {weather.map((element) => (
          <CreateDailyWeather key={element.id} info={element} />
        ))}
      </div>
    </div>
  );
}

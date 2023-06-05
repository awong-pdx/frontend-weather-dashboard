import React, { useEffect, useState } from 'react';
import { useWeather } from '../WeatherProvider';
import CreateDailyWeather from '../../CreateDailyWeather';

export default function DailyWeather() {
  const { dailyWeather } = useWeather();
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    if (dailyWeather) {
      const { list } = dailyWeather;
      const dailyWeatherInfo = list.map((weatherData, index) => {
        const weatherObj = {
          key: index,
          id: weatherData.weather[0].id,
          timestamp: weatherData.dt,
          minTemperature: weatherData.temp.min,
          maxTemperature: weatherData.temp.max,
          iconKey: weatherData.weather[0].icon,
          weatherDescription: weatherData.weather[0].description,
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
    <div className="row px-2">
      {weather.map((dailyForecastData) => (
        <CreateDailyWeather
          key={dailyForecastData.key}
          weatherInfo={dailyForecastData}
        />
      ))}
    </div>
  );
}

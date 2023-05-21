import React, { useEffect, useState } from 'react';
import { useWeather } from './WeatherProvider';
// import { useTheme } from './ThemeProvider';

export default function DailyWeather() {
  const { dailyWeather } = useWeather();
  // const { theme } = useTheme; // to style the daily weather
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    if (dailyWeather) {
      const { list } = dailyWeather;
      const dailyWeatherInfo = list.map((weatherData) => {
        const weatherObj = {
          timestamp: weatherData.dt,
          temperature: weatherData.temp.day,
          iconKey: weatherData.weather[0].icon,
        };
        return weatherObj;
      });

      setWeather(dailyWeatherInfo);
      console.log(weather); // remove later
    }
  }, [dailyWeather]);

  return (
    <div className="container-fluid">
      <h1>Testing Daily Weather</h1>
    </div>
  );
}

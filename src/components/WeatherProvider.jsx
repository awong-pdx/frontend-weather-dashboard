import React, { createContext, useContext, useEffect, useState } from 'react';
import requestLonLat from '../WeatherRequest';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const currentWeatherURI = 'https://api.openweathermap.org/data/2.5/weather';
const hourlyWeatherURI =
  'https://pro.openweathermap.org/data/2.5/forecast/hourly';
const dailyWeatherURI =
  'https://api.openweathermap.org/data/2.5/forecast/daily';

const WeatherContext = createContext();
export const useWeather = () => useContext(WeatherContext);

export default function WeatherProvider({ children }) {
  // propTypes : {
  //   children: PropTypes.node
  // }
  const coordinates = {
    latitude: '45.50742',
    longitude: '-122.68984',
  };

  const [currentWeather, setCurrentWeather] = useState();
  const [hourlyWeather, setHourlyWeather] = useState();
  const [dailyWeather, setDailyWeather] = useState();

  const getWeather = async function getWeatherUsingRequest(
    latitude,
    longitude,
    currentURI,
    hourlyURI,
    dailyURI
  ) {
    const current = await requestLonLat(
      latitude,
      longitude,
      currentURI,
      API_KEY
    );
    const hourly = await requestLonLat(latitude, longitude, hourlyURI, API_KEY);
    const daily = await requestLonLat(latitude, longitude, dailyURI, API_KEY);
    setCurrentWeather(current);
    setHourlyWeather(hourly);
    setDailyWeather(daily);
  };

  useEffect(() => {
    getWeather(
      coordinates.latitude,
      coordinates.longitude,
      currentWeatherURI,
      hourlyWeatherURI,
      dailyWeatherURI
    );
  }, [coordinates.latitude, coordinates.longitude]);

  return (
    <WeatherContext.Provider
      value={{ currentWeather, hourlyWeather, dailyWeather }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

// WeatherProvider.propTypes = {
//   children: PropTypes.node
// }

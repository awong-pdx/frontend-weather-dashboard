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

export default function WeatherProvider(props) {
  const { geoData, loadingAnimation, children } = props;

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
    loadingAnimation(false);
  };

  useEffect(() => {
    getWeather(
      geoData.latitude,
      geoData.longitude,
      currentWeatherURI,
      hourlyWeatherURI,
      dailyWeatherURI
    );
  }, [geoData.latitude, geoData.longitude]);

  return (
    <WeatherContext.Provider
      value={{ currentWeather, hourlyWeather, dailyWeather }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

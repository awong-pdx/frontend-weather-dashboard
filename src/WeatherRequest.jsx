import { useEffect } from 'react';
import axios from 'axios';

const currentWeatherURI = 'https://api.openweathermap.org/data/2.5/weather';
const hourlyWeatherURI =
  'https://pro.openweathermap.org/data/2.5/forecast/hourly';
const dailyWeatherURI =
  'https://api.openweathermap.org/data/2.5/forecast/daily';

const requestLonLat = async function requestWeatherByLonAndLat(
  latitude,
  longitude,
  URI,
  API_KEY
) {
  const URIparams = {
    lat: latitude,
    lon: longitude,
    appid: API_KEY,
    units: 'imperial',
  };

  try {
    const response = await axios(
      `${URI}?${new URLSearchParams(URIparams).toString()}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export default function WeatherRequest(props) {
  const {
    coordinates,
    addCurrentWeather,
    addHourlyWeather,
    addDailyWeather,
    API_KEY,
  } = props;

  const getWeather = async function getWeatherUsingRequest(
    latitude,
    longitude,
    currentURI,
    hourlyURI,
    dailyURI
  ) {
    const currentWeather = await requestLonLat(
      latitude,
      longitude,
      currentURI,
      API_KEY
    );
    const hourlyWeather = await requestLonLat(
      latitude,
      longitude,
      hourlyURI,
      API_KEY
    );
    const dailyWeather = await requestLonLat(
      latitude,
      longitude,
      dailyURI,
      API_KEY
    );
    addCurrentWeather(currentWeather);
    addHourlyWeather(hourlyWeather);
    addDailyWeather(dailyWeather);
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
}

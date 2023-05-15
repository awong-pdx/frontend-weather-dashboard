import { useEffect } from 'react';

const currentWeatherURI = 'https://api.openweathermap.org/data/2.5/weather';
const hourlyWeatherURL =
  'https://pro.openweathermap.org/data/2.5/forecast/hourly';
const dailyWeatherURL =
  'https://api.openweathermap.org/data/2.5/forecast/daily';

const requestLonLat = async function requestWeatherByLonAndLat(URIparams, URI) {
  const response = await fetch(
    `${URI}?${new URLSearchParams(URIparams).toString()}`
  );
  const responseJSON = await response.json();
  return responseJSON;
};

export default function WeatherRequest(props) {
  const {
    coordinates,
    setCurrentWeather,
    setHourlyWeather,
    setDailyWeather,
    API_KEY,
  } = props;

  useEffect(() => {
    const currentWeatherParams = {
      lat: coordinates.latitude,
      lon: coordinates.longitude,
      appid: API_KEY,
      units: 'imperial',
    };

    requestLonLat(currentWeatherParams, currentWeatherURI)
      .then((data) => {
        setCurrentWeather(data);
      })
      .catch((error) => {
        console.error(error);
      });
    requestLonLat(currentWeatherParams, hourlyWeatherURL)
      .then((data) => {
        setHourlyWeather(data);
      })
      .catch((error) => {
        console.error(error);
      });
    requestLonLat(currentWeatherParams, dailyWeatherURL)
      .then((data) => {
        setDailyWeather(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [
    coordinates.latitude,
    coordinates.longitude,
    API_KEY,
    setCurrentWeather,
    setHourlyWeather,
    setDailyWeather,
  ]);
}

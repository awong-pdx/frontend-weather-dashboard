import { useWeather } from './components/WeatherProvider';

export default function Test() {
  const { currentWeather, hourlyWeather, dailyWeather } = useWeather();
  console.log(`current weather for ${currentWeather.name}: `, currentWeather);
  console.log(`hourly weather for ${hourlyWeather.city.name}:`, hourlyWeather);
  console.log(`daily weather for ${dailyWeather.city.name}: `, dailyWeather);
}

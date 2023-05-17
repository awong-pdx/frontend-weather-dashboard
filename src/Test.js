import { useWeather } from './components/WeatherProvider';

export default function Test() {
  const { currentWeather, hourlyWeather, dailyWeather } = useWeather();
  console.log('current weather: ',currentWeather);
  console.log('hourly weather: ',hourlyWeather);
  console.log('daily weather: ',dailyWeather);
}

import { useWeather } from './components/WeatherProvider';

export default function Test() {
  const { currentWeather, hourlyWeather, dailyWeather } = useWeather();
  console.log(currentWeather);
  console.log(hourlyWeather);
  console.log(dailyWeather);
}

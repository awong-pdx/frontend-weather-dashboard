import React from 'react';
import { useWeather } from '../../WeatherProvider';
import { toLocalDate, getHourString } from '../../../utilities/helperFunctions';
// import { Line } from 'react-chartjs-2';

export default function HourlyTempGraph() {
  const { hourlyWeather } = useWeather();
  if (!hourlyWeather) return null;

  const { timezone } = hourlyWeather.city;
  const hourlyTimeXValues = hourlyWeather.list
    .slice(0, 5)
    .map((weatherForHour) =>
      getHourString(toLocalDate(weatherForHour.dt), timezone)
    );

  console.log(hourlyTimeXValues);

  return (
    <div className="col-8 border border-primary rounded">
      <h1>Hourly Weather Graph</h1>
    </div>
  );
}

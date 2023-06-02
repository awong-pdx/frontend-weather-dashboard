import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useWeather } from '../../WeatherProvider';
import { toLocalDate, getHourString } from '../../../utilities/helperFunctions';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function HourlyTempGraph() {
  const { hourlyWeather } = useWeather();
  if (!hourlyWeather) return null;

  const { timezone } = hourlyWeather.city;
  const hourlyTimeXValues = hourlyWeather.list
    .slice(0, 10)
    .map((weatherForHour) =>
      getHourString(toLocalDate(weatherForHour.dt), timezone)
    );

  const hourlyWeatherYValues = hourlyWeather.list
    .slice(0, 10)
    .map((weatherForHour) => Math.round(weatherForHour.main.temp));

  const options = {
    responsive: true,
  };

  const data = {
    labels: hourlyTimeXValues,
    datasets: [
      {
        label: 'Hourly Temperature (F°)',
        data: hourlyWeatherYValues,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderWidth: 3,
      },
    ],
  };

  return (
    <div className="col-8 border border-primary rounded">
      <Line options={options} data={data} />
    </div>
  );
}

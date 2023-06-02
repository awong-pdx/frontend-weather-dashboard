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
} from 'chart.js';
import { useWeather } from '../../WeatherProvider';
import { toLocalDate, getHourString } from '../../../utilities/helperFunctions';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
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
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Hourly Temperature',
        fontSize: 14,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
          fontSize: 12,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Temperature (°F)',
          fontSize: 12,
        },
      },
    },
  };

  const data = {
    labels: hourlyTimeXValues,
    datasets: [
      {
        label: ' Temperature (°F)',
        data: hourlyWeatherYValues,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderWidth: 3,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="col-8 border border-primary rounded py-1">
      <Line className="hourly-graph" options={options} data={data} />
    </div>
  );
}
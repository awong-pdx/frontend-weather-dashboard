import React from 'react';
import Sun from './weather-details/Sun';
import HourlyTempGraph from './weather-details/HourlyTempGraph';

export default function WeatherDetailTop() {
  return (
    <div className="row p-2">
      <HourlyTempGraph />
      <Sun />
    </div>
  );
}

import React from 'react';
import Sun from './weather-details/Sun';
import HourlyTempGraph from './weather-details/HourlyTempGraph';

export default function WeatherDetailTop() {
  return (
    <div className="row p-2">
      <div className="col-8">
        <HourlyTempGraph />
      </div>
      <div className="col-4">
        <Sun />
      </div>
    </div>
  );
}

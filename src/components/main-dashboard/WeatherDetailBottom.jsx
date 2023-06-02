import React from 'react';
import Pressure from './weather-details/Pressure';
import WindStatus from './weather-details/WindStatus';
import Humidity from './weather-details/Humidity';

export default function WeatherDetailBottom() {
  return (
    <div className="row px-2 mt-2">
      <Pressure />
      <WindStatus />
      <Humidity />
    </div>
  );
}

import React from 'react';
import Sun from './weather-details/Sun';
import FeelsLikeTemp from './weather-details/FeelsLikeTemp';

export default function WeatherDetailTop() {
  return (
    <div className="row px-2">
      <FeelsLikeTemp />
      <Sun />
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { useWeather } from '../../WeatherProvider';
import { getTimeNoSec } from '../../../utilities/helperFunctions';

export default function Sun() {
  const { currentWeather } = useWeather();
  const [weather, setWeather] = useState({});

  useEffect(() => {
    if (currentWeather) {
      const { sys } = currentWeather;
      const sunriseTime = getTimeNoSec(sys.sunrise);
      const sunsetTime = getTimeNoSec(sys.sunset);
      setWeather({
        sunrise: sunriseTime,
        sunset: sunsetTime,
      });
    }
  }, [currentWeather]);

  if (Object.keys(weather).length === 0) {
    return null;
  }
  return (
    <div className="col-4 border border-primary rounded">
      <p>Sunrise: {weather.sunrise}</p>
      <p>Sunset: {weather.sunset}</p>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { useWeather } from '../../WeatherProvider';
import { getHourAndMinString } from '../../../utilities/helperFunctions';
import sunriseImage from '../../../images/sunrise.svg';
import sunsetImage from '../../../images/sunset.svg';

export default function Sun() {
  const { currentWeather } = useWeather();
  const [weather, setWeather] = useState({});

  useEffect(() => {
    if (currentWeather) {
      const { sys, timezone } = currentWeather;
      const sunriseTime = getHourAndMinString(sys.sunrise, timezone);
      const sunsetTime = getHourAndMinString(sys.sunset, timezone);
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
    <div className="sun main-dashboard-detail weather-detail rounded">
      <h4>
        <img src={sunriseImage} alt="Sunrise icon" width="90px" />
        Sunrise: {weather.sunrise}
      </h4>
      <h4>
        <img src={sunsetImage} alt="Sunset icon" width="90px" />
        Sunset: {weather.sunset}
      </h4>
    </div>
  );
}

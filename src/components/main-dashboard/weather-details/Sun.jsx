import React, { useEffect, useState } from 'react';
import { useWeather } from '../../WeatherProvider';
import { getTimeNoSec } from '../../../utilities/helperFunctions';
import sunriseImage from '../../../images/sunrise.svg';
import sunsetImage from '../../../images/sunset.svg';

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
    <div className="sun col-4 border border-primary rounded pt-1">
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

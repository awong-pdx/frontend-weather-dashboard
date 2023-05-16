import { React, useEffect, useState } from 'react';
import axios from 'axios';
import WeatherProvider from './components/WeatherProvider';
import Test from './Test';

const geocodingURI = 'http://api.openweathermap.org/geo/1.0/direct?q=';
const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  const [geoData, setGeoData] = useState({});

  useEffect(() => {
    setGeoData({
      longitude: 45.5202471,
      latitude: -122.674194,
    });
  }, []);

  const retrieveGeoData = async (city) => {
    if (city === '') {
      return new Error('city name must be specified');
    }

    try {
      const response = await axios.get(
        `${geocodingURI}${city}&appid=${weatherApiKey}`
      );

      const { data } = response;
      if (data.length === 0) {
        return new Error('city name does not exist');
      }

      const [location] = data;
      const coordinates = {
        longitude: location.lon,
        latitude: location.lat,
      };

      setGeoData(coordinates);
      // Remove console log when integrated with current,daily,and hourly weather api
      console.log(geoData);
      return undefined;
    } catch (error) {
      return error;
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      retrieveGeoData(event.target.value);
    }
  };

  return (
    <WeatherProvider>
      <Test />
      <div className="App">
        <p>Our weather dashboard!</p>
      <label htmlFor="search">
        <input
          type="text"
          id="search"
          name="search"
          onKeyDown={handleKeyDown}
        />
      </label>
      </div>
    </WeatherProvider>
  );
}

export default App;

import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import WeatherProvider from './components/WeatherProvider';

const geocodingURI = 'http://api.openweathermap.org/geo/1.0/direct?q=';
const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  const [geoData, setGeoData] = useState({});

  useEffect(() => {
    setGeoData({
      longitude: -122.674194,
      latitude: 45.5202471,
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
    <WeatherProvider geoData={geoData}>
      <div className="App light">
        <div className="row vh-100">
          <div className="sidebar col-sm-4 border border-2 border-primary">
            <label htmlFor="search" className="bg-custom-color">
              <input
                type="text"
                id="search"
                name="search"
                onKeyDown={handleKeyDown}
              />
              <Button as="a" variant="tomato">
                Button
              </Button>
            </label>
          </div>
          <div className="main-dashboard col-sm-8 border border-2 border-primary">
            <p>Our weather dashboard!</p>
          </div>
        </div>
      </div>
    </WeatherProvider>
  );
}

export default App;

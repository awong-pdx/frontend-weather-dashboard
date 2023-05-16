import { React, useState } from 'react';
import axios from 'axios';

const geocodingURI = 'http://api.openweathermap.org/geo/1.0/direct?q=';
const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  const [geoData, setGeoData] = useState({});

  const retrieveGeoData = async (city = '') => {
    try {
      const response = await axios.get(
        `${geocodingURI}${city}&appid=${weatherApiKey}`
      );

      const { data } = response;
      const [location] = data;
      const coordinates = {
        longitude: location.lon,
        latitude: location.lat,
      };

      setGeoData(coordinates);
      // Only console logging geoData so eslint doesn't throw error
      // remove later when passing geoData as prop
      console.log('The coordinates are: ');
      console.log(geoData);
      return undefined;
    } catch (error) {
      return error;
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Remove later as well, only to show results of city name entered
      console.log(`The city searched for is ${event.target.value}`);
      retrieveGeoData(event.target.value);
    }
  };

  return (
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
  );
}

export default App;

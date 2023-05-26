import { React, useEffect, useState } from 'react';
import axios from 'axios';
import WeatherProvider from './components/WeatherProvider';
import { useTheme } from './components/ThemeProvider';
import Sidebar from './components/sidebar/Sidebar';
import MainDashboard from './components/main-dashboard/MainDashboard';

const geocodingURI = 'http://api.openweathermap.org/geo/1.0/direct?q=';
const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  const [geoData, setGeoData] = useState({});
  const { theme } = useTheme();
  const [searchInput, setSearchInput] = useState('');

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

  useEffect(() => {
    retrieveGeoData(searchInput);
  }, [searchInput]);

  return (
    <WeatherProvider geoData={geoData}>
      <main className={`App container-fluid ${theme}`}>
        <div className="dashboard-container row">
          <Sidebar
            onNewSearch={(search) => {
              setSearchInput(search);
            }}
          />
          <MainDashboard />
        </div>
      </main>
    </WeatherProvider>
  );
}

export default App;

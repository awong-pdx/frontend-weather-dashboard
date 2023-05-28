import { React, useEffect, useState } from 'react';
import axios from 'axios';
import Bars from 'react-loading-icons/dist/esm/components/bars';
import WeatherProvider from './components/WeatherProvider';
import { useTheme } from './components/ThemeProvider';
import Sidebar from './components/sidebar/Sidebar';
import MainDashboard from './components/main-dashboard/MainDashboard';

const geocodingURI = 'http://api.openweathermap.org/geo/1.0/direct?q=';
const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  const [geoData, setGeoData] = useState({
    longitude: -122.674194,
    latitude: 45.5202471,
  });
  const { theme } = useTheme();
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(true);

  const retrieveGeoData = async (city) => {
    if (city === '') {
      return new Error('city name must be specified');
    }

    try {
      setLoading(true);
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

      if (
        coordinates.latitude === geoData.latitude &&
        coordinates.longitude === geoData.longitude
      ) {
        setLoading(false);
      }

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
    <div>
      {loading && (
        <div className="animation-wrapper">
          <Bars className="loading-bar" fill="#06bcee" />
          <h4>Loading...</h4>
        </div>
      )}
      <WeatherProvider geoData={geoData} loading={setLoading}>
        <main
          className={`App container-fluid ${theme} ${
            loading ? 'loading-screen' : ''
          }`}
        >
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
    </div>
  );
}

export default App;

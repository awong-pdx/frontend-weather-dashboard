import { React, useEffect, useState } from 'react';
import axios from 'axios';
import WeatherProvider from './components/WeatherProvider';
import { useTheme } from './components/ThemeProvider';
import ToggleButton from './components/ToggleButton';
import SearchBar from './components/SearchBar';
import DailyWeather from './components/DailyWeather';

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
      <div className={`App container-fluid ${theme}`}>
        <div className="dashboard-container row">
          <section className="sidebar col-sm-4 border border-2 border-primary">
            <div className="container">
              <div className="row mt-1">
                <div className="col" />
                <div className="col-sm-4 col-3 col-xl-2">
                  <ToggleButton />
                </div>
              </div>
            </div>
            <SearchBar
              onNewSearch={(search) => {
                setSearchInput(search);
              }}
            />
          </section>
          <section className="main-dashboard col-sm-8 border border-2 border-primary">
            <p>Our weather dashboard!</p>
            <DailyWeather />
          </section>
        </div>
      </div>
    </WeatherProvider>
  );
}

export default App;

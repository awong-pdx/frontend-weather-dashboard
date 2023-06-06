import React from 'react';
import DailyWeather from './DailyWeather';
import WelcomeHeader from './WelcomeHeader';
import WeatherDetailTop from './WeatherDetailTop';
import WeatherDetailBottom from './WeatherDetailBottom';
import { useTheme } from '../ThemeProvider';

export default function MainDashboard() {
  const { theme } = useTheme();
  return (
    <section className="main-dashboard col-md-9 px-1">
      <div
        className={`main-dashboard-inner main-dashboard-inner-${theme} container`}
      >
        <WelcomeHeader />
        <DailyWeather />
        <WeatherDetailTop />
        <WeatherDetailBottom />
      </div>
    </section>
  );
}

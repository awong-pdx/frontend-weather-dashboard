import React from 'react';
import DailyWeather from './DailyWeather';
import WelcomeHeader from './WelcomeHeader';
import WeatherDetailTop from './WeatherDetailTop';
import WeatherDetailBottom from './WeatherDetailBottom';
import { useTheme } from '../ThemeProvider';

export default function MainDashboard() {
  const { theme } = useTheme();
  return (
    <section className="main-dashboard col-sm-9 border border-2 border-primary px-0">
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

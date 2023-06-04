import React from 'react';
import DailyWeather from './DailyWeather';
import WelcomeHeader from './WelcomeHeader';
import WeatherDetailTop from './WeatherDetailTop';
import WeatherDetailBottom from './WeatherDetailBottom';

export default function MainDashboard() {
  return (
    <section className="main-dashboard col-sm-8 border border-2 border-primary">
      <div className="main-dashboard-inner container">
        <WelcomeHeader />
        <DailyWeather />
        <WeatherDetailTop />
        <WeatherDetailBottom />
      </div>
    </section>
  );
}

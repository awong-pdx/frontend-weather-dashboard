import React from 'react';
import DailyWeather from './DailyWeather';
import WelcomeHeader from './WelcomeHeader';
import WeatherDetailOne from './WeatherDetailOne';

export default function MainDashboard() {
  return (
    <section className="main-dashboard col-sm-8 border border-2 border-primary">
      <WelcomeHeader />
      <DailyWeather />
      <WeatherDetailOne />
    </section>
  );
}

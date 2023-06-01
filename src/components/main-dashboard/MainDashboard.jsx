import React from 'react';
import DailyWeather from './DailyWeather';
import WelcomeHeader from './WelcomeHeader';
import WeatherDetailTop from './WeatherDetailTop';

export default function MainDashboard() {
  return (
    <section className="main-dashboard col-sm-8 border border-2 border-primary">
      <WelcomeHeader />
      <DailyWeather />
      <WeatherDetailTop />
    </section>
  );
}

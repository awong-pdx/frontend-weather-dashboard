import React from 'react';
import DailyWeather from './DailyWeather';

export default function MainDashboard() {
  return (
    <section className="main-dashboard col-sm-8 border border-2 border-primary">
      <p>Our weather dashboard!</p>
      <DailyWeather />
    </section>
  );
}

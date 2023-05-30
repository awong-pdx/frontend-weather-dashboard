import React from 'react';
import ToggleButton from './ToggleButton';
import SearchBar from './SearchBar';
import SummaryWeather from './SummaryWeather';

export default function Sidebar({ onNewSearch }) {
  return (
    <section className="sidebar col-sm-4 border border-2 border-primary">
      <ToggleButton />
      <SearchBar onNewSearch={onNewSearch} />
      <SummaryWeather />
    </section>
  );
}

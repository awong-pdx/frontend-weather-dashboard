import React from 'react';
import ToggleButton from './ToggleButton';
import SearchBar from './SearchBar';
import SummaryWeather from './SummaryWeather';
import LoginButton from './LoginButton';

export default function Sidebar({ onLoginToggle, onNewSearch }) {
  return (
    <section className="sidebar col-sm-4 border border-2 border-primary">
      <div className="sidebar-top">
        <LoginButton onLoginToggle={onLoginToggle} />
        <ToggleButton />
      </div>
      <SearchBar onNewSearch={onNewSearch} />
      <SummaryWeather />
    </section>
  );
}

import React from 'react';
import ToggleButton from './ToggleButton';
import SearchBar from './SearchBar';
import SummaryWeather from './SummaryWeather';
import LoginButton from './LoginButton';
import { useTheme } from '../ThemeProvider';

export default function Sidebar({ onLoginToggle, onNewSearch }) {
  const { theme } = useTheme();
  return (
    <section className="sidebar-outer col-sm-4">
      <div className={`sidebar-inner sidebar-inner-${theme} container`}>
        <div className="sidebar-top">
          <LoginButton onLoginToggle={onLoginToggle} />
          <ToggleButton />
        </div>
        <SearchBar onNewSearch={onNewSearch} />
        <SummaryWeather />
      </div>
    </section>
  );
}

import React from 'react';
import ToggleButton from './ToggleButton';
import SearchBar from './SearchBar';
import SummaryWeather from './SummaryWeather';

export default function Sidebar({ onNewSearch }) {
  return (
    <section className="sidebar text-center col-sm-4 border border-2 border-primary">
      <div className="container">
        <div className="row mt-2">
          <div className="col" />
          <div className="col-sm-4 col-3 col-xl-2">
            <ToggleButton />
          </div>
        </div>
        <div className="row">
          <SearchBar onNewSearch={onNewSearch} />
        </div>
        <div className="row">
          <SummaryWeather />
        </div>
      </div>
    </section>
  );
}

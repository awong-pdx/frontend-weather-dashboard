import React from 'react';
import ToggleButton from './ToggleButton';
import SearchBar from './SearchBar';

export default function Sidebar({ onNewSearch }) {
  return (
    <section className="sidebar col-sm-4 border border-2 border-primary">
      <div className="container">
        <div className="row mt-1">
          <div className="col" />
          <div className="col-sm-4 col-3 col-xl-2">
            <ToggleButton />
          </div>
        </div>
      </div>
      <SearchBar onNewSearch={onNewSearch} />
    </section>
  );
}

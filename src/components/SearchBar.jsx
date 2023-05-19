import React from 'react';
import { useInput } from '../hooks/customHooks';

export default function SearchBar({ onNewSearch = (f) => f }) {
  const [searchProp, resetSearch] = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onNewSearch(searchProp.value);
    resetSearch();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">
        Search
        <input
          id="search"
          value={searchProp.value}
          onChange={searchProp.onChange}
          type="text"
          placeholder="City name"
          required
        />
      </label>
    </form>
  );
}

import React, { useState } from 'react';
import { useInput } from '../../utilities/customHooks';
import { validate } from '../../utilities/helperFunctions';
import { useTheme } from '../ThemeProvider';

export default function SearchBar({ onNewSearch = (f) => f }) {
  const { theme } = useTheme();
  const [searchProp, resetSearch] = useInput('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate(searchProp.value, setErrorMessage)) {
      onNewSearch(searchProp.value.toLowerCase());
      resetSearch();
    } else {
      resetSearch(searchProp.value);
    }
  };

  return (
    <form className="search-bar text-center" onSubmit={handleSubmit}>
      <label htmlFor="search">
        <input
          id="search"
          className={`form-control dashboard-input dashboard-input-${theme}`}
          value={searchProp.value}
          onChange={searchProp.onChange}
          type="text"
          placeholder="City name"
          aria-required
        />
        <p aria-live="polite">{`${errorMessage}`}</p>
      </label>
    </form>
  );
}

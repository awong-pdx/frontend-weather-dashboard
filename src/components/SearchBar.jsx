import React, { useState } from 'react';
import { useInput } from '../utilities/customHooks';
import { validate } from '../utilities/helperFunctions';

export default function SearchBar({ onNewSearch = (f) => f }) {
  const [searchProp, resetSearch] = useInput('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate(searchProp.value, setErrorMessage)) {
      onNewSearch(searchProp.value);
    } else {
      onNewSearch('');
    }
    resetSearch();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">
        Search:
        <input
          id="search"
          value={searchProp.value}
          onChange={searchProp.onChange}
          type="text"
          placeholder="City name"
        />
        <p>{`${errorMessage}`}</p>
      </label>
    </form>
  );
}

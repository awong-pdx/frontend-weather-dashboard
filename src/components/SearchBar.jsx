import React, { useState } from 'react';
import { useInput } from '../hooks/customHooks';

export default function SearchBar({ onNewSearch = (f) => f }) {
  const [searchProp, resetSearch] = useInput('');
  const [errorMessage, setErrorMessage] = useState('');

  //   const newErrorMsg = (message) => {
  //     setErrorMessage(message);
  //   }

  //     useEffect(() => {
  //         newErrorMsg(errorMessage);
  //     }, [errorMessage]);
  const validate = (input) => {
    let validated = false;
    if (input.trim() === '') {
      setErrorMessage('Please enter a city.');
    } else {
      setErrorMessage('');
      validated = true;
    }

    return validated;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate(searchProp.value)) {
      onNewSearch(searchProp.value);
    } else {
      onNewSearch('');
    }
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
          //   required
        />
        {`${errorMessage}`}
      </label>
    </form>
  );
}

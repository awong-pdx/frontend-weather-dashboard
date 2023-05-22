import { useState } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useInput = function useFormInputWithUseState(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    { value, onChange: (e) => setValue(e.target.value) },
    (resetValue = initialValue) => setValue(resetValue),
  ];
};

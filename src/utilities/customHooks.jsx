import { useState } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useInput = function useFormInputWithUseState(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    { value, onChange: (e) => setValue(e.target.value) },
    (resetValue = initialValue) => setValue(resetValue),
  ];
};

export const getCurrentTime = () => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  let minute = currentTime.getMinutes().toString();
  if (minute.length === 1) minute = `0${minute}`;
  let seconds = currentTime.getSeconds().toString();
  if (seconds.length === 1) seconds = `0${seconds}`;

  const timeOfDay = hours < 12 ? 'AM' : 'PM';
  const convertedTime = hours > 12 ? hours - 12 : hours;
  const fullTime = `${convertedTime}:${minute}:${seconds}${timeOfDay}`;

  return fullTime;
};

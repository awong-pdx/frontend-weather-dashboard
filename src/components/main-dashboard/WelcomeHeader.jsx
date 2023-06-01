import React, { useEffect, useState } from 'react';
import {
  getCurrentDate,
  getCurrentTime,
} from '../../utilities/helperFunctions';

export default function WelcomeHeader() {
  const [time, setTime] = useState(getCurrentTime());
  const [currentDate, setCurrentDate] = useState(getCurrentDate());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(getCurrentTime());
      setCurrentDate(getCurrentDate());
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [time, currentDate]);

  return (
    <div className="row justify-content-end mb-2">
      <div className="welcome-header col-8 text-end mt-2">
        <h2>Welcome back!</h2>
        <p>{currentDate}</p>
        <p>Current local time: {time}</p>
      </div>
    </div>
  );
}

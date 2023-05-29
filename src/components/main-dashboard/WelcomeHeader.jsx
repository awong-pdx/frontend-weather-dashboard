import React, { useEffect, useState } from 'react';
import {
  getCurrentDate,
  getCurrentTime,
} from '../../utilities/helperFunctions';

export default function WelcomeHeader() {
  const [time, setTime] = useState(getCurrentTime());
  const currentDay = getCurrentDate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  return (
    <div className="row justify-content-end mb-2">
      <div className="welcome-header col-8 text-end">
        <h2>Welcome back *name!</h2>
        <p>{currentDay}</p>
        <p>Current local time: {time}</p>
      </div>
    </div>
  );
}

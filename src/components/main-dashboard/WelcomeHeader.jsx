import React, { useEffect, useState } from 'react';
import { getCurrentTime } from '../../utilities/customHooks';

export default function WelcomeHeader() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="row justify-content-end mb-2">
      <div className="col-6 text-end">
        <p>{time}</p>
        <h2>Welcome to our weather dashboard!</h2>
      </div>
    </div>
  );
}

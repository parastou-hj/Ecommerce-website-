import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = ({ initialHours = 0, initialMinutes = 0, initialSeconds = 0 }) => {
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (seconds === 0) {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else if (minutes === 0) {
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          } else {
            clearInterval(interval);
          }
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [hours, minutes, seconds]);

  return (
    <div className="timer">
      <div>
        <span>{hours}</span>:<span>{minutes < 10 ? `0${minutes}` : minutes}</span>:<span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;

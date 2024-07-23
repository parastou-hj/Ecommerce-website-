import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = ({ 
  initialHours = 0, 
  initialMinutes = 0, 
  initialSeconds = 0,
  onTimerEnd
}) => {
  const [time, setTime] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => {
        if (prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
          clearInterval(interval);
          if (onTimerEnd) {
            onTimerEnd();
          }
          return prevTime;
        }

        let newSeconds = prevTime.seconds - 1;
        let newMinutes = prevTime.minutes;
        let newHours = prevTime.hours;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onTimerEnd]);

  const formatTime = (time) => time < 10 ? `0${time}` : time;

  return (
    <div className="timer">
      <div>
        <span>{formatTime(time.hours)}</span>:
        <span>{formatTime(time.minutes)}</span>:
        <span>{formatTime(time.seconds)}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
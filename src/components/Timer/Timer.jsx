import React, { useEffect, useState } from 'react';

import './timer.css';

export const Timer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(false);

  const startTimer = () => {
    if (!timer) {
      setIsRunning(true);
      const intervalId = setInterval(() => {
        if (time > 0) {
          setTime((prevState) => prevState - 1);
          console.log(1);
        }
      }, 1000);
      console.log(intervalId);
      setTimer(intervalId);
    }
  };

  const pauseTimer = () => {
    setIsRunning(false);
    clearInterval(timer);
    setTimer(false);
  };

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, [timer]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <>
      <button type="button" className="icon icon-play" onClick={startTimer} disabled={isRunning} aria-label="play" />
      <button type="button" className="icon icon-pause" onClick={pauseTimer} disabled={!isRunning} aria-label="pause" />
      <span className="time-value">{`  ${minutes} : ${seconds}`}</span>
    </>
  );
};

import { createContext, useState, useEffect } from "react";

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prev => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const startTimer = (time) => {
    setSeconds(time);
    setIsRunning(true);
  };

  const stopTimer = () => setIsRunning(false);
  const resumeTimer = () => { if (seconds > 0) setIsRunning(true); };
  const resetTimer = () => { setIsRunning(false); setSeconds(0); };

  return (
    <TimerContext.Provider value={{
      seconds,
      isRunning,
      startTimer,
      stopTimer,
      resumeTimer,
      resetTimer
    }}>
      {children}
    </TimerContext.Provider>
  );
};

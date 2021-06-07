import './App.css';
import React, { useState, useEffect } from 'react';
import { Subject, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import TimerDisplay from './components/TimerDisplay/TimerDisplay';
import TimerBtn from './components/TimerBtn/TimerBtn';

function App() {
  const [time, setTime] = useState(0);
  const [count, setCount] = useState(false);

  useEffect(() => {
    const counter = new Subject();
    interval(10)
      .pipe(takeUntil(counter))
      .subscribe(() => {
        if (count) {
          setTime((value) => value + 1);
        }
      });
    return () => {
      counter.next();
      counter.complete();
    };
  }, [count]);

  const handleStart = () => {
    setCount(true);
  };

  const handleStop = () => {
    setCount(false);
    setTime(0);
  };

  const handleWait = () => {
    setCount((prevState) => !prevState);
    interval(300);
  };

  const handleReset = () => {
    handleStop();
    handleStart(0);
  };

  return (
    <div className='App'>
      <TimerDisplay time={time} />
      <TimerBtn
        start={handleStart}
        stop={handleStop}
        wait={handleWait}
        reset={handleReset}
      />
    </div>
  );
}

export default App;

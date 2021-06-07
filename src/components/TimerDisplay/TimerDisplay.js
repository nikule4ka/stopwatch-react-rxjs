import React from 'react';
import s from './timerDisplay.module.css';

export default function TimerDisplay({ time }) {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Stopwatch</h1>
      <span className={s.counter}>
        {('0' + Math.floor((time / (1000 * 60 * 60)) % 24)).slice(-2)}
      </span>
      <span className={s.delimiter}>:</span>
      <span className={s.counter}>
        {('0' + Math.floor(time / 6000)).slice(-2)}
      </span>
      <span className={s.delimiter}>:</span>
      <span className={s.counter}>
        {('0' + Math.floor((time / 100) % 60)).slice(-2)}
      </span>
    </div>
  );
}

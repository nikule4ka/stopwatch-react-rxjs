import React from 'react';

import s from './timerBtn.module.css';

export default function TimerBtn({ start, stop, wait, reset }) {
  return (
    <div className={s.container}>
      <button className={s.btn} onClick={start}>
        Start
      </button>
      <button className={s.btn} onClick={stop}>
        Stop
      </button>
      <button className={s.btn} onDoubleClick={wait}>
        Wait
      </button>
      <button className={s.btn} onClick={reset}>
        Reset
      </button>
    </div>
  );
}

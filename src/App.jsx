import { useState } from 'react';
import style from './App.module.scss';
import './assets/utiles/Reset.module.scss';

import DisplayLinks from './assets/displayOnlineSources/DisplayLinks';
import Location from './assets/DisplayLocation/Location';

function App() {
  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.header}>
          <DisplayLinks />
        </div>
        <div className={style.tours}>
          <Location />
        </div>
      </div>
    </>
  );
}

export default App;

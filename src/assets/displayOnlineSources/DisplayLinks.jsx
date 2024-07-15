import React from 'react';
import data from '../data.js';
import style from './DisplayLinks.module.scss';

function DisplayLinks() {
  console.log(data);
  return (
    <div className={style.displayLinksContainer}>
      <p className={style.photosFrom}>Photos from Unsplash</p>
      <span>(can use these URLs as your img src)</span>
      <div>
        {data.map((el) => {
          return (
            <div>
              <h3 className={style.location}>{el.location}</h3>
              <a href={el.imageUrl} className={style.imageUrl}>
                {el.imageUrl}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DisplayLinks;

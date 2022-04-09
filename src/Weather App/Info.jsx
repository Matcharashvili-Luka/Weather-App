import React from 'react';
import Bottom from '../Weather App/bottomInfo';
import Top from './topInfo';

function Info({ data }) {
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  };

  return (
    <div className='info'>
      {data.name !== undefined &&
        <div>
          <Top 
            data={data}
            dateBuilder={dateBuilder}
          />
          <Bottom 
            data={data}
          />
        </div>
      }
    </div>
  )
}

export default Info
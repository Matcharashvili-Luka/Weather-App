import React from 'react';
import Bottom from '../Weather App/bottomInfo';
import Top from './topInfo';

function Info({ data }) {
  return (
    <div className='info'>
      {data.name !== undefined &&
        <div>
          <Top 
            data={data}
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
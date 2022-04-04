import React from 'react';

function Info() {
  return (
    <div>
        <div className="top">
            <div className="location">
                <p>Tbilisi</p>
            </div>
            <div className="temp">
                <h1>20C</h1>
            </div>
            <div className="description">
                <p>clouds</p>
            </div>
        </div>
        <div className="bottom">
            <div className="feels">
                <p>25C</p>
            </div>
            <div className="wind">
                <p>2km/h</p>
            </div>
        </div>
    </div>
  )
}

export default Info
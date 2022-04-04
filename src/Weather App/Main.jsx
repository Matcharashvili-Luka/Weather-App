import React, { useState } from 'react';
import '../Style/Main.css';
import SearchBar from './SearchBar';
import Info from '../Weather App/Info';
import axios from 'axios';

function Main() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=b04d06ae875d0c90ff0b66cf8e01fb5b`;

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
        axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
        })
        setLocation('')
        }
    };

return (
    <div 
      className='weatherApp'
      style={{backgroundColor: (data.main.temp > 0) ? ((data.main.temp > 15) ? 'red' : ((data.main.temp > 5) ? 'orange' : 'blue')) : 'blue'}}
    >
        <SearchBar    
          searchLocation={searchLocation}
          setLocation={setLocation}
          location={location}  
        />
        <Info />
    </div>
    
  )
}

export default Main
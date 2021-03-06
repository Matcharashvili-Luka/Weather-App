import React from 'react';
import SearchBar from './SearchBar';
import Info from '../Weather App/Info';
import axios from 'axios';

function Main({ data, setData, location, setLocation, url }) {
    const searchLocation = (event) => {
        if (event.key === 'Enter') {
          axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
        })
        setLocation('')
        }
    };

    const searchLoacationForBTN = (event) => {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      }).then(setLocation(''))
    }

return (
    <div className='weatherApp' >
        <SearchBar    
          searchLocation={searchLocation}
          setLocation={setLocation}
          location={location}
          searchLoacationForBTN={searchLoacationForBTN}
        />
        <Info
          data={data}
        />
    </div>
    
  )
}

export default Main
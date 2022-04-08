import React from 'react';
import '../Style/SearchBar.css'

function SearchBar({ location, setLocation, searchLocation, searchLoacationForBTN }) {

  return (
    <div className='search'>
        <div className="searchContainer">
            <div className="searchInputs">
              <input
                value={location}
                onChange={e => setLocation(e.target.value)}
                onKeyPress={searchLocation}
                placeholder='Enter Location'
                type="text" 
              />
              <i 
                className="fa-solid fa-magnifying-glass"
                onClick={searchLoacationForBTN}
              ></i>
            </div>
        </div>
    </div>
  )
}

export default SearchBar
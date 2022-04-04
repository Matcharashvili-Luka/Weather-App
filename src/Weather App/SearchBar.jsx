import React from 'react';
import '../Style/SearchBar.css'

function SearchBar({ location, setLocation, searchLocation }) {

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
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    </div>
  )
}

export default SearchBar
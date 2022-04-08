import './App.css';
import Main from './Weather App/Main';
import { useState } from 'react';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=b04d06ae875d0c90ff0b66cf8e01fb5b`;

  return (
    <div 
      className={(typeof data.main != "undefined") ? ((data.weather[0].main === 'Clouds') ? 'weather clouds' : ((data.weather[0].main === 'Mist') ? 'weather clouds' : ((data.weather[0].main === 'Smoke') ? 'weather clouds' : ((data.weather[0].main === 'Haze') ? 'weather clouds' : ((data.weather[0].main === 'Dust') ? 'weather clouds' : ((data.weather[0].main === 'Fog') ? 'weather clouds' : ((data.weather[0].main === 'Sand') ? 'weather clouds' : ((data.weather[0].main === 'Rain') ? 'weather rain' :((data.weather[0].main === 'Drizzle') ? 'weather rain' : ((data.weather[0].main === 'Snow') ? 'weather snow' : ((data.weather[0].main === 'Tunderstorm') ? 'weather storm' : ((data.weather[0].main === 'Tornado') ? 'weather storm' : ((data.weather[0].main === 'Clear' && data.main.temp > 30) ? 'weather hot' : ((data.weather[0].main === 'Clear' && data.main.temp > 15) ? 'weather normal' : ((data.weather[0].main === 'Clear' && data.main.temp > 0) ? 'weather fine' : 'weather cold'))))))))))))))) : 'weather app'}
    >
      <Main 
        data={data}
        setData={setData}
        location={location}
        setLocation={setLocation}
        url={url}
      />
    </div>
  );
}

export default App;


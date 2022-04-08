import './App.css';
import Main from './Weather App/Main';
import { useState } from 'react';
// import fineSunny from './Assets/fineSunny.jpg';
// import normalSunny from './Assets/normalSunny.jpg';
// import hotSunny from './Assets/hotSunny.jpg';
// import rainy from './Assets/rainy.jpg';
// import freeze from './Assets/freeze.jpg';
// import storm from './Assets/storm.jpg';
// import cloudy from './Assets/cloudy.jpg';
// import snow from './Assets/snow.jpg';
// import mainBG from './Assets/mainBG.jpg'

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


// backgroundImage : (typeof data.main != "undefined") ? (desc === 'Clouds') ? `url(${cloudy}` : ((desc === 'Mist') ? `url(${cloudy}` : ((desc === 'Smoke') ? `url(${cloudy}` : ((desc === 'Haze') ? `url(${cloudy}` : ((desc === 'Dust') ? `url(${cloudy}` : ((desc === 'Fog') ? `url(${cloudy}` : ((desc === 'Sand') ? `url(${cloudy}` : ((desc === 'Snow') ? `url(${snow}` : ((desc === 'Rain') ? `url(${rainy}` : ((desc === 'Drizzle') ? `url(${rainy}` : ((desc === 'Tunderstorm') ? `url(${storm}` : ((desc === 'Tornado') ? `url(${storm}` : (('Clear' && temp > 30) ? `url(${hotSunny}` : (('Clear' && temp > 15) ? `url(${normalSunny}` : (('Clear' && temp > 0) ?  `url(${fineSunny}` :  `url(${freeze}`)))))))))))))): `url(${mainBG}`
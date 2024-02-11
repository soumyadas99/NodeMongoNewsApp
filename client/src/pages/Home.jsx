
import { useEffect, useState } from 'react';
import './Home.css'
import { Carousel } from '../components/Carousel';
import {slides} from '../data/carouselData.json'
import { NewsViewer } from './NewsViewer';


export const Home = () => {
  const [weather, setWeather] = useState(null);
  const apiKey = '5713ae054ee25e9866a959654d695533'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
  const city = 'New Delhi'; // Replace 'New York' with your desired city

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }

    fetchWeatherData();
  }, [city, apiKey]);

  return (
    <div>
      {weather && (
        <section className="weather-update">
        
        <div className="weather-info">
            <h1>Weather Update</h1>
          <div><strong>{city}</strong></div>
          <div>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather Icon" />
          </div>
          <div>{weather.weather[0].description}</div>
          <div>{weather.main.temp}°C</div>
        </div>
        <div className="image-slider">
        {/* Add your image slider component here */}
        <Carousel data={slides}/>
        </div>
        <div className='news-viewer'>
          
          <NewsViewer/>

        </div>
      </section>
      )}
      
    </div>
  );
};



import './style.css';
import background from './assets/iccup-Rljwy2QK4YE-unsplash.jpg';
import { fetchWeather } from './weather-api';

const body = document.querySelector('body');
body.style.backgroundImage = `url(${background})`;
fetchWeather();

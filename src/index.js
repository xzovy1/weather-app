
import './style.css';
import background from './assets/iccup-Rljwy2QK4YE-unsplash.jpg';
import { fetchWeather } from './weather-api';


const body = document.querySelector('body');
body.style.backgroundImage = `url(${background})`;
// let area = prompt('Location?');
// let area = 'Edmonton'
function updateText(variable, data , unit){
    if(variable.textContent !== ''){
        variable.textContent = '';
    }
    variable.textContent += data;
    if(unit && variable.textContent !== ''){
        variable.textContent += ` °${unit}`
    }
    return variable.textContent;
}

const getWeatherData = (area = 'edmonton') => {
    fetchWeather(area ).then((values) => {
        console.log(values.current.condition.icon)
        icon.src = values.current.condition.icon
        // city.textContent =  values.location.name;
        updateText(city, values.location.name);
        updateText(region, values.location.region);
        updateText(currentTemp, values.current.temp_c, 'C');
        updateText(feelsLike, values.current.feelslike_c, 'C');
        updateText(humidity, values.current.humidity);
        updateText(lastUpdated, values.current.last_updated)
    }
)}

getWeatherData();

const city = document.getElementById('city-name');
const region = document.getElementById('region-name');
const currentTemp = document.getElementById('temp_c');
const feelsLike = document.getElementById('feels_like');
const humidity = document.getElementById('humidity');
const lastUpdated = document.getElementById('last_updated');
const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');
const icon = document.getElementById('weather-condition');

searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(getWeatherData(searchBar.value))
    getWeatherData(searchBar.value)
})









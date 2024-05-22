
import './style.css';
// import background from './assets/iccup-Rljwy2QK4YE-unsplash.jpg';
import { fetchWeather } from './weather-api';
import { fetchBackground } from './backgroundImg-api';


const getBackground = (query) => {
    fetchBackground(query).then(
        response => {
            const background = document.querySelector('video');
            console.log(response.url)
            body.style.backgroundImage = `url(${response.url})`
        }
    )
}

function updateText(variable, data , unit){
    if(variable.textContent !== ''){
        variable.textContent = '';
    }
    variable.textContent += data;
    if(unit && variable.textContent !== ''){
        variable.textContent += ` °${unit}`
    }
}

const getWeatherData = (area = 'edmonton') => {
    fetchWeather(area).then((values) => {
        icon.src = values.current.condition.icon
        getBackground(values.current.condition.text)
        dataArray.forEach((element) => {
            let obj, objParam;
            function getPosition(element){
                obj = element.closest('div').getAttribute('class');
                objParam = element.getAttribute('id')
            }
            getPosition(element)
            updateText(element, values[obj][objParam])
        })
    }
)}

getWeatherData();


const city = document.getElementById('name');
const region = document.getElementById('region');
const currentTemp = document.getElementById('temp_c');
const feelsLike = document.getElementById('feelslike_c');
const humidity = document.getElementById('humidity');
const lastUpdated = document.getElementById('last_updated');
const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');
const icon = document.getElementById('weather-condition');

const dataArray = [city, region, currentTemp, feelsLike, humidity, lastUpdated];

searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    getWeatherData(searchBar.value)
})


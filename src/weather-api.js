export async function fetchWeather(location = 'edmonton'){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=993d595687db4a4dad2153340242401&q=${location}&aqi=no`, {mode: 'cors'})
    .then(function(response){return response.json()})
    .then(function(response){return response})
    return response;
}





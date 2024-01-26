export async function fetchWeather(){
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=993d595687db4a4dad2153340242401&q=London&aqi=no', {mode: 'cors'})
    const weatherData = await response.json()
    console.log(weatherData.current.temp_c)
}

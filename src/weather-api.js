import key from "./key"
export async function fetchWeather(location = 'edmonton'){
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}&aqi=no`, {mode: 'cors'})
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response)
        return response
    })
    return response;
}





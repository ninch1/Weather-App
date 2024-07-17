const keyAPI = 'cfd0ff7290f373770cc597e9d9ad0006';
let city = 'Miami';


async function getWeatherData() {
    try {
        const weatherFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyAPI}`);
        const weatherData = await weatherFetch.json();
        
        const weather = {
            name: weatherData.name,
            temp: weatherData.main.temp,
            humidity: weatherData.main.humidity,
            description: weatherData.weather[0].description,
            icon: weatherData.weather[0].icon
        }

        console.log(weather);
        return weather;
    } catch(error) {
        console.error(error);
    }
}
getWeatherData();

async function renderWeatherCard() {
    const weatherData = await getWeatherData();

    document.querySelector('.card').innerHTML = `
        <h1 class="city-name">${weatherData.name}</h1>
        <div class="temperature">${weatherData.temp - -273.15}°C</div>
        <div class="humidity">${weatherData.humidity}%</div>
        <div class="weather-description">${weatherData.description}</div>
        <img src="https://openweathermap.org/img/wn/${weatherData.icon}@2x.png" class="emoji">
    `;
}

renderWeatherCard();
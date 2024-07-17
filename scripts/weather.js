const keyAPI = 'cfd0ff7290f373770cc597e9d9ad0006';

export async function getWeatherData(cityName) {
    try {
        const weatherFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${keyAPI}`);
        const weatherData = await weatherFetch.json();
        
        const weather = {
            name: weatherData.name,
            temp: weatherData.main.temp,
            humidity: weatherData.main.humidity,
            description: weatherData.weather[0].description,
            icon: weatherData.weather[0].icon
        }
        return weather;
    } catch(error) {
        console.error(error);
    }
}

export async function renderWeatherCard(cityName) {
    try {
        const weatherData = await getWeatherData(cityName);

        document.querySelector('.weather-card').innerHTML = `
        <div class="card">
                <h1 class="city-name">${weatherData.name}</h1>
                <div class="temperature">${(weatherData.temp - 273.15).toFixed(1)}°C</div>
                <div class="humidity">${weatherData.humidity}%</div>
                <div class="weather-description">${weatherData.description}</div>
                <img src="https://openweathermap.org/img/wn/${weatherData.icon}@2x.png" class="emoji">
            </div>
        `;
    } catch(error) {
        console.error(error);
    }
}
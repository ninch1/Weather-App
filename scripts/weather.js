import { bookmarkList, saveBookmarkList } from "./bookmark/bookmark list.js";

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

        const temp = (weatherData.temp - 273.15).toFixed(1);

        document.querySelector('.weather-card').innerHTML = `
        <div class="card">
                <h1 class="city-name">${weatherData.name}</h1>
                <div class="temperature">${temp}°C</div>
                <div class="humidity">${weatherData.humidity}%</div>
                <div class="weather-description">${weatherData.description}</div>
                <img src="https://openweathermap.org/img/wn/${weatherData.icon}@2x.png" class="emoji">
            </div>
        `;

        document.title = `${weatherData.name} - ${temp}°C`;
    } catch(error) {
        console.error(error);
    }
}

export async function generateBookmarkHTML() {
    let HTML = '';

    const bookmarkPromises = bookmarkList.map(async (elementCity, index) => {
        try {
            const weatherData = await getWeatherData(elementCity);
            const temp = (weatherData.temp - 273.15).toFixed(1);

            return `
                <div class="bookmark">
                    <div class="bookmark-left">
                        <div class="city-name">${weatherData.name}</div>
                        <img src="https://openweathermap.org/img/wn/${weatherData.icon}@2x.png" alt="">
                    </div>
                    <div class="bookmark-right">
                        <div class="temperature">Temperature: ${temp}°C</div>
                        <div class="humidity">Humidity: ${weatherData.humidity}%</div>
                        <div class="description">${weatherData.description}</div>
                        <div class="remove-bookmark" data-index="${index}">remove</div>
                    </div>
                </div>
            `;
        } catch(error) {
            console.error(error);
            return '';
        }
    });

    // Wait for all promises to resolve and join the results
    const results = await Promise.all(bookmarkPromises);
    HTML = results.join('');

    document.querySelector('.bookmark-container').innerHTML = HTML;

    document.querySelectorAll('.remove-bookmark').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            bookmarkList.splice(index, 1);
            saveBookmarkList();
            generateBookmarkHTML();
        });
    });
}

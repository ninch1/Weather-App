import { bookmarkList, saveBookmarkList } from "./bookmark/bookmark list.js";

const keyAPI = 'cfd0ff7290f373770cc597e9d9ad0006';

export async function getWeatherData(cityName) {
    try {
        const weatherFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${keyAPI}`);
        const weatherData = await weatherFetch.json();
        
        if (weatherFetch.ok) {
            const weather = {
                name: weatherData.name,
                temp: weatherData.main.temp,
                humidity: weatherData.main.humidity,
                description: weatherData.weather[0].description,
                icon: weatherData.weather[0].icon
            }
            return weather;
        } else {
            console.error('Error fetching weather data:', weatherData);
            return null;
        }
    } catch(error) {
        console.error('Error:', error);
        return null;
    }
}

export async function cityValidator(cityName) {
    const data = await getWeatherData(cityName);

    if (data === null) {
        return false;
    } else {
        return true;
    }
}

export async function getCityName(cityName) {
    const data = await getWeatherData(cityName);
    return data.name;
}

export async function renderWeatherCard(cityName) {
    try {
        const weatherData = await getWeatherData(cityName);

        if (weatherData) {
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
            return true;
        } else {
            console.error('Failed due to error in fetching weather data.');
            return false;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function generateBookmarkHTML() {
    let HTML = '';

    const bookmarkPromises = bookmarkList.map(async (elementCity, index) => {
        try {
            const weatherData = await getWeatherData(elementCity);

            if (weatherData) {
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
                            <div class="bookmark-right-remove">
                            <div class="remove-bookmark" data-index="${index}">remove</div>
                        </div>
                        </div>
                    </div>
                `;
            } else {
                console.error('Failed due to error in fetching weather data.');
                return false;
            }
        } catch(error) {
            console.error(error);
            return false;
        }
    });

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

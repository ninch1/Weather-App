import { getWeatherData } from "./weather.js";
import { renderWeatherCard } from "./weather.js";

let city = '';

//gets city from input
const searchCity = document.querySelector('.search-input');

searchCity.addEventListener('keydown', (event) => {
    searchCity.focus();
    if (event.key === 'Enter') {
        searchCity.blur();
        switch(searchCity.value) {
            case '':
                document.querySelector('.card').innerHTML = '<h1>Please enter a city</h1>';
                break;
            default: 
                document.querySelector('.middle-section').innerHTML = '<div class="circle-input"></div>';
                renderWeatherCard(searchCity.value);
                searchCity.value = '';
        }
    }
});
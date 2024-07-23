import { getWeatherData, renderWeatherCard } from "../weather.js";

let city = '';

// gets city from input
const searchCity = document.querySelector('.search-input');

searchCity.addEventListener('keydown', async (event) => {
    searchCity.focus();
    if (event.key === 'Enter') {
        searchCity.blur();
        switch(searchCity.value) {
            case '':
                alert('Please enter a city');
                break;
            default: 
                const success = await renderWeatherCard(searchCity.value);
                if (!success) {
                    alert('Please enter correct city');
                } else {
                    document.querySelector('.middle-section').innerHTML = '<div class="circle-input"></div>';
                    searchCity.value = '';
                }
        }
    }
});

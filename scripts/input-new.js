import { getWeatherData } from "./weather.js";
import { renderWeatherCard } from "./weather.js";

//clicking circle transition
document.querySelector('.middle-section').addEventListener('click', (event) => {
    if (event.target.classList.contains('circle-input') || event.target.classList.contains('circle-input-new')) {
        document.querySelector('.middle-section').innerHTML = '<input type="text" class="search-input-new">';
        document.querySelector('.search-input-new').focus();

        //functionality

        let city = '';

        //gets city from input
        const searchCity = document.querySelector('.search-input-new');

        searchCity.addEventListener('keydown', (event) => {
            searchCity.focus();
            if (event.key === 'Enter') {
                searchCity.blur();
                switch(searchCity.value) {
                    case '':
                        document.querySelector('.card').innerHTML = '<h1>Please enter a city</h1>';
                        break;
                    default: 
                        document.querySelector('.middle-section').innerHTML = '<div class="circle-input-new"></div>';
                        renderWeatherCard(searchCity.value);
                        searchCity.value = '';
                }
            }
        });
    }
});


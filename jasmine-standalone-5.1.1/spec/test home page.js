import { renderWeatherCard } from "../../scripts/weather.js";

describe('sudo: Home page weather card render', () => {
    it('renderWeatherCard works', async () => {
        await renderWeatherCard('tbilisi');
        expect(document.querySelector('.city-name').innerHTML).toEqual('Tbilisi');
        document.querySelector('.weather-card').innerHTML = '';
    });
    it('error handling works', async () => {
        spyOn(window, 'fetch').and.callFake(() => {
            return Promise.reject(new Error('Network Error'));
        });

        spyOn(console, 'error');
        await renderWeatherCard('invalidCity');
        expect(console.error).toHaveBeenCalledWith(new Error('Network Error'));
        expect(document.querySelector('.weather-card').innerHTML).toBe('');
    })
});
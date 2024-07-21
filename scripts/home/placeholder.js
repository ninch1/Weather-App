//DOMContentLoaded waits for HTML to get loaded (doesnt wait for css or anything else to load). before this the css was loading sooner so the fade in transition wasnt working
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.search-input').classList.add('fade-in');
});


function getLocation() {
    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
        const location = fetch(geoApiUrl)
        .then(res => res.json())
        .then((data) => {
            document.querySelector('.search-input').placeholder = data.locality;
        }
        );
    }

    const error = () => {
        document.querySelector('.search-input').placeholder = 'Enter a city';
    }

    navigator.geolocation.getCurrentPosition(success, error);
}
getLocation();

//placeholder
let timeoutBlurKey = '';

const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('focus', () => {
    clearTimeout(timeoutBlurKey);
    searchInput.classList.add('search-input-forFocus');
    searchInput.classList.remove('search-input-clicked');
    searchInput.placeholder = '';
});

searchInput.addEventListener('blur', () => {
    clearTimeout(timeoutBlurKey);
    timeoutBlurKey = setTimeout(() => {
        searchInput.placeholder = 'Miami';
        searchInput.classList.remove('search-input-forFocus');
        searchInput.classList.add('search-input-clicked');
    }, 5000);
});
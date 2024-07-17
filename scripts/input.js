//DOMContentLoaded waits for HTML to get loaded (doesnt wait for css or anything else to load). before this the css was loading sooner so the fade in transition wasnt working
document.addEventListener('DOMContentLoaded', function() { 
    document.querySelector('.search-input').classList.add('fade-in');
});

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
const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('focus', () => {
    searchInput.classList.add('search-input-forFocus');
    searchInput.classList.remove('search-input-clicked');
});

searchInput.addEventListener('blur', () => {
    setTimeout(() => {
        searchInput.classList.remove('search-input-forFocus');
        searchInput.classList.add('search-input-clicked');
    }, 5000);
});
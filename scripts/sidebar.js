const menu = document.querySelector('.icon-menu');
const home = document.querySelector('.icon-home');
const divide = document.querySelector('.icon-divide');
const bookmark = document.querySelector('.icon-bookmark');
const alignCenter = document.querySelector('.icon-align-center');
const settings = document.querySelector('.icon-settings');

menu.addEventListener('click', () => {
    home.classList.toggle('active');
    setTimeout(() => {
        divide.classList.toggle('active');
    }, 100);
    setTimeout(() => {
        bookmark.classList.toggle('active');
    }, 200);
    setTimeout(() => {
        alignCenter.classList.toggle('active');
    }, 300);
    setTimeout(() => {
        settings.classList.toggle('active');
    }, 1000);
});

//redirecting

home.addEventListener('click', () => {
    window.location.href = 'home.html';
});

bookmark.addEventListener('click', () => {
    window.location.href = 'bookmark.html';
});

document.querySelector('.image-cloud').addEventListener('click', () => {
    window.location.href = 'home.html';
});
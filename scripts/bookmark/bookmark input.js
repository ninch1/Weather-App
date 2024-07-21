import { generateBookmarkHTML } from "../weather.js";
import { bookmarkList, saveBookmarkList } from "./bookmark list.js";

export function addBookmarkEventListeners() {
    const addCity = document.querySelector('.add-bookmark-input');

    addCity.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            if (addCity.value !== '') {
                if (bookmarkList.length < 5) {
                    bookmarkList.push(addCity.value);
                    addCity.blur();
                    document.querySelector('.bookmark-add').innerHTML = `
                        <img src="images/Plus.png" class="icon-plus" alt="">
                        <div class="bookmark-add-text not-active">Add bookmark</div>
                    `;
                    addCity.value = '';
                    saveBookmarkList();
                    generateBookmarkHTML();

                    addBookmarkClick();
                } else {
                    console.log('bookmark limit reached');
                }
            } else {
                addCity.blur();
                document.querySelector('.bookmark-add').innerHTML = `
                    <img src="images/Plus.png" class="icon-plus" alt="">
                    <div class="bookmark-add-text not-active">Add bookmark</div>
                `;
                addCity.value = '';
                addBookmarkClick();
            }
        }
    });

    document.querySelector('.icon-plus').addEventListener('click', () => {
        const inputElement = document.querySelector('.add-bookmark-input');
        if (inputElement) {
            if (inputElement.value !== '') {
                if (bookmarkList.length < 5) {
                    bookmarkList.push(addCity.value);
                    addCity.blur();
                    document.querySelector('.bookmark-add').innerHTML = `
                        <img src="images/Plus.png" class="icon-plus" alt="">
                        <div class="bookmark-add-text not-active">Add bookmark</div>
                    `;
                    inputElement.value = '';
                    saveBookmarkList();
                    generateBookmarkHTML();

                    addBookmarkClick();
                } else {
                    console.log('bookmark limit reached');
                }
            } else {
                addCity.blur();
                document.querySelector('.bookmark-add').innerHTML = `
                    <img src="images/Plus.png" class="icon-plus" alt="">
                    <div class="bookmark-add-text not-active">Add bookmark</div>
                `;
                inputElement.value = '';
                addBookmarkClick();
            }
        }
    });
}

export function addBookmarkClick() {
    const addBookmark = document.querySelector('.bookmark-add');
    const bookmarkNotActive = document.querySelector('.not-active');

    const clickHandler = () => {
        addBookmark.classList.remove('not-active');
        addBookmark.innerHTML = `
            <img src="images/Plus.png" class="icon-plus" alt="">
            <input type="text" class="add-bookmark-input">
        `;
        bookmarkNotActive.removeEventListener('click', clickHandler);

        addBookmarkEventListeners();
    };

    bookmarkNotActive.addEventListener('click', clickHandler);
}
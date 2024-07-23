import { generateBookmarkHTML, cityValidator } from "../weather.js";
import { bookmarkList, saveBookmarkList } from "./bookmark list.js";

export function addBookmarkEventListeners() {
    const addCity = document.querySelector('.add-bookmark-input');
    const addBookmark = document.querySelector('.bookmark-add');

    addCity.addEventListener('keydown', async (event) => {
        if (event.key === 'Enter') {
            addBookmark.classList.add('not-active');
            if (addCity.value !== '') {
                const cityValidity = await cityValidator(addCity.value);
                if (cityValidity) {
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
                    addCity.blur();
                    document.querySelector('.bookmark-add').innerHTML = `
                        <img src="images/Plus.png" class="icon-plus" alt="">
                        <div class="bookmark-add-text not-active">Add bookmark</div>
                    `;
                    addCity.value = '';
                    addBookmarkClick();
                    alert('Please enter correct city');
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

    document.querySelector('.icon-plus').addEventListener('click', async () => {
        addBookmark.classList.add('not-active');

        const inputElement = document.querySelector('.add-bookmark-input');
        if (inputElement) {
            if (inputElement.value !== '') {
                const cityValidity = await cityValidator(inputElement.value);

                if (cityValidity) {
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
                    addCity.blur();
                    document.querySelector('.bookmark-add').innerHTML = `
                        <img src="images/Plus.png" class="icon-plus" alt="">
                        <div class="bookmark-add-text not-active">Add bookmark</div>
                    `;
                    inputElement.value = '';
                    addBookmarkClick();
                    alert('Please enter correct city');
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
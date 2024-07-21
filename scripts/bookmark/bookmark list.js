export const bookmarkList = JSON.parse(localStorage.getItem('bookmarkList')) || [];

export function saveBookmarkList() {
    localStorage.setItem('bookmarkList', JSON.stringify(bookmarkList));
}
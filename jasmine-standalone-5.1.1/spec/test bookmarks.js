import { bookmarkList, saveBookmarkList } from "../../scripts/bookmark/bookmark list.js";

describe('saveBookmarkList', () => {
    beforeEach(() => {
        localStorage.clear();
        bookmarkList.length = 0;
        spyOn(Storage.prototype, 'setItem').and.callThrough();
    });

    it('should save the bookmarkList to localStorage', () => {
        bookmarkList.push('tbilisi');
        saveBookmarkList();
        expect(localStorage.setItem).toHaveBeenCalledWith('bookmarkList', JSON.stringify(['tbilisi']));
        const savedData = JSON.parse(localStorage.getItem('bookmarkList'));
        expect(savedData).toEqual(['tbilisi']);
    });

    it('should correctly initialize bookmarkList from localStorage', () => {
        localStorage.setItem('bookmarkList', JSON.stringify(['tbilisi']));
        const reinitializedBookmarkList = JSON.parse(localStorage.getItem('bookmarkList'));
        expect(reinitializedBookmarkList).toEqual(['tbilisi']);
    });
});
import { generateBookmarkHTML } from "../weather.js";
import { bookmarkList, saveBookmarkList } from "./bookmark list.js";
import { addBookmarkEventListeners, addBookmarkClick } from "./bookmark input.js";

generateBookmarkHTML();
addBookmarkClick();
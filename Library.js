import { createBook } from './Book.js';

export const createLibrary = () => {
    let books = []; // Приватне сховище

    return {
        addBook(data) {
            const newBook = createBook(data);
            books = [...books, newBook]; // Immutability
            return newBook;
        },
        getAllBooks() { return books; },
        getAvailableBooks() { return books.filter(b => b.available); },
        searchBooks(query) {
            const q = query.toLowerCase();
            return books.filter(b => b.title.toLowerCase().includes(q));
        }
    };
};
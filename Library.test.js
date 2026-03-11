import { createLibrary } from './Library.js';

describe('Система управління бібліотекою', () => {
    let lib;

    beforeEach(() => {
        lib = createLibrary();
    });

    test('Має правильно додавати книги', () => {
        lib.addBook({ id: 1, title: 'Test Book', author: 'Author', isbn: '111', year: 2020 });
        expect(lib.getAllBooks().length).toBe(1);
    });

    test('Книга має ставати недоступною після видачі', () => {
        const book = lib.addBook({ id: 1, title: 'JS', author: 'Kyle', isbn: '222', year: 2022 });
        book.borrow();
        expect(book.available).toBe(false);
        expect(lib.getAvailableBooks().length).toBe(0);
    });

    test('Пошук має працювати коректно', () => {
        lib.addBook({ id: 1, title: 'Kobzar', author: 'Shevchenko', isbn: '333', year: 1840 });
        const results = lib.searchBooks('Kobzar');
        expect(results[0].author).toBe('Shevchenko');
    });
});
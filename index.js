import { createLibrary } from './Library.js';

const lib = createLibrary();

// Додаємо тестові дані
lib.addBook({ id: 1, title: 'Kobzar', author: 'Shevchenko', isbn: '111', year: 1840 });
lib.addBook({ id: 2, title: 'JS Guide', author: 'MDN', isbn: '222', year: 2024 });

console.log("Всі книги:");
lib.getAllBooks().forEach(b => console.log(b.getInfo()));

console.log("\nПозичаємо книгу 'JS Guide'...");
lib.getAllBooks()[1].borrow();

console.log("Доступні книги зараз:");
lib.getAvailableBooks().forEach(b => console.log(b.title));
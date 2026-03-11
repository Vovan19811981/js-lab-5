export const createBook = ({ id, title, author, isbn, year, genre }) => {
    let _available = true; // Приватна змінна (Closure)

    return {
        id, title, author, isbn, year, genre,
        get available() { return _available; },
        borrow() {
            if (!_available) return false;
            _available = false;
            return true;
        },
        returnBook() { _available = true; },
        getInfo() { return `${this.title} - ${this.author} (${this.year})`; }
    };
};
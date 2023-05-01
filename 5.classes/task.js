class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		Object.assign(this, {
			name,
			releaseDate,
			pagesCount,
			_state: 100,
			type: null
		});
	}

	get state() {
		return this._state;
	}

	set state(value) {
		if (value > 100) this._state = 100;
		else if (value < 0) this._state = 0;
		else this._state = value;
	}

	fix() {
		this.state *= 1.5;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = 'book';
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = 'novel';
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = 'fantastic';
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = 'detective';
	}
}

class Library {
	constructor(name) {
		Object.assign(this, { name, books: [] });
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		return this.books.find(book => book[`${type}`] == value) || null;
	}

	giveBookByName(bookName) {
		let bookIndex = this.books.findIndex(book => book.name == bookName);
		if (bookIndex != -1) {
			return this.books.splice(bookIndex, 1)[0];
		}
		return null;
	}
}

showHello("greeting", "TypeScript");

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

enum Category { JavaScript, CSS, HTML, TypeScript, Angular2 }

interface Book {
	id: number;
	title: string;
	author: string;
	available: boolean;
	category: Category;
	pages?: number;
	// copies?: number;
	// markDamaged?: (reason: string) => void;
	markDamaged?: DamageLogger;
}

interface DamageLogger {
	(reason: string): void;
}

interface Person {
	name: string;
	email: string;
}

interface Author extends Person {
	numBooksPublished: number;
}

interface Librarian extends Person {
	department: string;
	assistCustomer: (custName: string) => void;
}

class UniversityLibrarian implements Librarian {
	name: string = 'Ann';
	email: string;
	department: string;
	assistCustomer(custName: string): void {
		console.log('Assist');
	}
}




function getAllBooks(): Book[] {
	let books = [
		{ 
			id: 1,
			title: 'Refactoring JavaScript',
			author: 'Evan Burchard',
			available: true,
			category: Category.JavaScript
		}, {
			id: 2, 
			title: 'JavaScript Testing',
			author: 'Liang Yuxian Eugene', 
			available: false, 
			category: Category.JavaScript 
		}, { 
			id: 3, 
			title: 'CSS Secrets',
			author: 'Lea Verou',
			available: true,
			category: Category.CSS
		}, { 
			id: 4,
			title: 'Mastering JavaScript Object-Oriented Programming',
			author: 'Andrea Chiarelli',
			available: true,
			category: Category.JavaScript
		}
	];

	return books;
}

function logFirstAvailable(books: Array<any> = getAllBooks()): void {
	let numberOfBooks: number = books.length;
	let firstAvailable: string = '';

	for (let currentBook of books) {
		if (currentBook.available) {
			firstAvailable = currentBook.title;
			break;
		}
	}

	console.log(`Total Books: ${numberOfBooks}`);
	console.log(`First available: ${firstAvailable}`);
}

function getBookTitleByCategory(categoryFilter: Category = Category.JavaScript): Array<string> {
	const allBooks = getAllBooks();
	const filteredTitles: string[] = [];

	for (let currentBook of allBooks) {
		if (currentBook.category === categoryFilter) {
			filteredTitles.push(currentBook.title);
		}
	}
	return filteredTitles;
}

function logBookTitle(titles: string[]): void {
	for (let title of titles) {
		// console.log(title);
	}
}

function getBookById(id: number): Book | undefined {
	const allBooks = getAllBooks();

	return allBooks.find(book => book.id === id);
}

function createCustomerID (name: string, id: number): string {
	return `${name}${id}`;
}

function createCustomer (name: string, age?: number, city?: string): void {
	console.log(name);
	if (age) {
		console.log(age);
	}
	if (city) {
		console.log(city);
	}
}

function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
	console.log(`checking out books for ${customer}`);

	const booksCheckedOut: string[] = [];

	for (let id of bookIDs) {
		let book = getBookById(id);
		if(book && book.available) {
			booksCheckedOut.push(book.title);
		}
	}

	return booksCheckedOut;
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(bookProp: string | boolean): string[] {
	const allBooks = getAllBooks();
	const result: string[] = [];

	if (typeof bookProp === 'string') {
		for(let book of allBooks) {
			if(book.author === bookProp) {
				result.push(book.title);
			}
		}
	} else if (typeof bookProp === 'boolean') {
		for(let book of allBooks) {
			if(book.available === bookProp) {
				result.push(book.title);
			}
		}
	}

	return result;
};

function printBook (book: Book): void {
	console.log(`${book.title} by ${book.author}`);
}

abstract class ReferenceItem {
	// title: string;
	// year: number;

	// constructor(newTitle: string, newYear: number) {
	// 	console.log('creating new title and year');
	// 	this.title = newTitle;
	// 	this.year = newYear;
	// }

	private _publisher: string;

	static department: string = 'Research';

	constructor(
		public title: string,
		protected year: number
	) {
		console.log('creating new title and year');
	}

	get publisher(): string {
		return this._publisher.toUpperCase();
	}

	set publisher(newPublisher: string) {
		this._publisher = newPublisher;
	}

	printItem(): void {
		console.log(`${this.title} was published in ${this.year}`);
		console.log(`${ReferenceItem.department}`);
	}

	abstract printCitation(): void;
}

class Encyclopedia extends ReferenceItem {
	constructor (
			newTitle: string,
			newYear: number,
			public edition: number
	) {
		super(newTitle, newYear);
	}

	printItem(): void {
		super.printItem();
		console.log(`Edition: ${this.edition} ${this.year}`)
	}

	printCitation(): void {
		console.log(`${this.title} by ${this.year}`);
	}
}





//---&&---------------------
// let allBooks = getAllBooks();
// logFirstAvailable(allBooks);

// const javaScriptBooks = getBookTitleByCategory(Category.JavaScript);
// logBookTitle(javaScriptBooks);

// // javaScriptBooks.forEach((val, ind, arr) => console.log(`${++ind} - ${val}`));

// // console.log(getBookById(2));

// const myID = createCustomerID('Ann', 10);
// console.log(myID);

// let IdGenerator: (string, number) => string;
// IdGenerator = (name: string, id: number) => `${name}${id}`;
// IdGenerator = createCustomerID;
// console.log(IdGenerator('Boris', 20));

// createCustomer('Ann');
// createCustomer('Ann', 10);
// createCustomer('Ann', 10, 'Kiev');

// console.log('without param', getBookTitleByCategory());
// logFirstAvailable();

// const myTitles:string[] = checkoutBooks('Ann', 1, 2, 3, 4, 5);
// console.log(myTitles);

// const checkedOutBooks = getTitles(true);
// checkedOutBooks.forEach(title => console.log(title))


// const checkedOutBooks = getTitles('Lea Verou');
// checkedOutBooks.forEach(title => console.log(title))

// let myBook: Book = {
// 	id: 5,
// 	title: 'Colors, Backgrounds and Gradients',
// 	author: 'Andrea',
// 	available: true,
// 	category: Category.CSS,
// 	// year: 2015,
// 	// copies: 3
// 	markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
// };

// // printBook(myBook);
// // myBook.markDamaged('missing back cover');

// let logDamage: DamageLogger;
// logDamage = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('_missing back cover');

// let favoriteAuthor: Author = {
// 	email: 'qwe@com',
// 	name: 'Ann',
// 	numBooksPublished: 10
// };

// let favoriteLibrarian: Librarian = {
// 	name: 'Boris',
// 	email: 'qwer2@com',
// 	department: 'classical books',
// 	assistCustomer: (name: string) => console.log(`Assist ${name}`)
// };

// let favoriteLibrarian: Librarian = new UniversityLibrarian();
// console.log(favoriteLibrarian);

// const ref: ReferenceItem = new ReferenceItem('title', 2017);
// ref.printItem();
// ref.publisher = 'My Publisher';
// console.log(ref.publisher)

const refBook: Encyclopedia = new Encyclopedia ('a', 2017, 100);
console.log(refBook);
refBook.printItem();
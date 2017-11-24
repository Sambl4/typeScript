import { Category } from './../enum'
import { Book, Logger, Author, Librarian, Magazine } from './../interface';



interface LibMgrCallback {
    (err: Error, title: string[]): void;
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
    setTimeout(() => {
        try {
            const foundBooks: string[] = getBookTitleByCategory(category);

            if(foundBooks.length > 0) {
                callback(null, foundBooks)
            } else {
                throw new Error('No books found.')
            }
        }
        catch (error){
            callback(error, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error, titles:string[]): void {
    if(err) {
        console.log(`Error message ${err}`);
    } else {
        console.log(`Found the following books:    ${titles}`)
    }

}

export function purge<I> (inventory: Array<I>): Array<I> {
    return inventory.splice(2, inventory.length);
}

export function getAllBooks(): Book[] {
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

export function logFirstAvailable(books: Array<any> = getAllBooks()): void {
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

export function getBookTitleByCategory(categoryFilter: Category = Category.JavaScript): Array<string> {
	const allBooks = getAllBooks();
	const filteredTitles: string[] = [];

	for (let currentBook of allBooks) {
		if (currentBook.category === categoryFilter) {
			filteredTitles.push(currentBook.title);
		}
	}
	return filteredTitles;
}

export function logBookTitle(titles: string[]): void {
	for (let title of titles) {
		console.log(title);
	}
}

export function getBookById(id: number): Book | undefined {
	const allBooks = getAllBooks();

	return allBooks.find(book => book.id === id);
}

export function createCustomerID (name: string, id: number): string {
	return `${name}${id}`;
}

export function createCustomer (name: string, age?: number, city?: string): void {
	console.log(name);
	if (age) {
		console.log(age);
	}
	if (city) {
		console.log(city);
	}
}

export function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
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

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(bookProp: string | boolean): string[] {
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

export function printBook (book: Book): void {
	console.log(`${book.title} by ${book.author}`);
}


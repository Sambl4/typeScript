showHello("greeting", "TypeScript");

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

enum Category { JavaScript, CSS, HTML, TypeScript, Angular2 }


function getAllBooks() {
	let books= [
		{ title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
		{ title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
		{ title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
		{ title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
	]
	return books;
}

function logFirstAvailable(books): void {
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

function getBookTitleByCategory(categoryFilter: Category): Array<string> {
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
		console.log(title);
	}
}

let allBooks = getAllBooks();
logFirstAvailable(allBooks);

const javaScriptBooks = getBookTitleByCategory(Category.JavaScript);
logBookTitle(javaScriptBooks);

import { Category } from './enum';
import { Book, Logger, Author, Librarian, Magazine } from './interface';
import { UniversityLibrarian, ReferenceItem } from './classes';
import RefBook from './encyclopedia';
import { purge, getBooksByCategory, logCategorySearch } from './lib/utility-functions';
import Shelf from './shelf';

showHello("greeting", "TypeScript");

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

//--------------------------------------



//--------------------------------------
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
// let logDamage: Logger;
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

// const refBook: RefBook = new RefBook('a', 2017, 100);
// console.log(refBook);
// refBook.printItem();

let inventory: Array<Book> = [
	{ id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
	{ id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
	{ id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
	{ id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

// let purgeBooks: Array<Book> = purge<Book>(inventory);
// purgeBooks.forEach(book => console.log(book.title));

// let purgeNumbers: Array<number> = purge<number>([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(purgeNumbers);

// const bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// const firstBook: Book = bookShelf.getFirst();
// console.log(firstBook.title);

// const magazines: Array<Magazine> = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];
 
// const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// const firstMagazine: Magazine = magazineShelf.getFirst();
// console.log(firstMagazine.title);

// magazineShelf.printTitles();
// const mag = magazineShelf.find('Five Points');
// console.log(mag);

// let l = new UniversityLibrarian();
// l.assistFaculty = () => console.log('new assist faculty method');
// l.assistFaculty();

// l.teachCommunity = () => console.log('new assist faculty method');
// l.teachCommunity();

console.log('Beginning search...');
getBooksByCategory(Category.JavaScript, logCategorySearch);
getBooksByCategory(Category.Software, logCategorySearch);
console.log('End search')
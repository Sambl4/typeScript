import * as Interfaces from './interface';


class UniversityLibrarian implements Interfaces.Librarian {
	name: string = 'Ann';
	email: string;
	department: string;
	assistCustomer(custName: string): void {
		console.log('Assist');
	}
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

export { UniversityLibrarian, ReferenceItem };
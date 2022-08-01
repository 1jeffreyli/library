let myLibrary = [];

// constructor
function Book(title, author, pages, read) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read	
	this.info = function () {
		return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read + ".";	
		}
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");


function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

// let tableRow = document.createElement("tr");

// a function that loops through the myLibrary array and displays them in the table
// two loops, first one to create a row element for each book, the second nested loop to create and append
// table cells to that row with the book's data

let bookProperties = ["title", "author", "pages", "read"];

function displayBook (myLibrary) {
    const table = document.getElementById("table");
    // let tableRow = document.createElement("tr");
    // let tableCell = document.createElement("td");
    for (let i = 0; i < myLibrary.length; i++) {
        const row = table.insertRow(-1);
        for (let j = 0; j <= myLibrary.length + 1; j++) {
            const cell = row.insertCell(-1);
            // cell.innerHTML = "hello";
            cell.innerHTML = myLibrary[i][bookProperties[j]];
        }
    }
}

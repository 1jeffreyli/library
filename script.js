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


// a function that loops through the myLibrary array and displays them in the table
// two loops, first one to create a row element for each book, the second nested loop to create and append
// table cells to that row with the book's data

let bookProperties = ["title", "author", "pages", "read"];

function displayBook (myLibrary) {
    const table = document.getElementById("table");
    for (let i = 0; i < myLibrary.length; i++) {
        const row = table.insertRow(-1);
        for (let j = 0; j <= myLibrary.length + 1; j++) {
            const cell = row.insertCell(-1);
            cell.innerHTML = myLibrary[i][bookProperties[j]];
        }
    }
}

// Create a modal for the NEW BOOK form and set the position to be absolute, with the view toggled from hidden to visible on click event
// link the input values of the form to the addBookToLibrary and displayBook functions (add book details first then display)

// add an event listener to the New Book button that pops out the modal by removing display none
const newBookBtn = document.getElementById("new-book-btn");
// function displayToggle() {
//     const modal = document.getElementById("modal");
//     if (modal.style.display === "none") {
//         modal.style.display === "block";
//     } else {
//         modal.style.display = "none";
//     }
// }
newBookBtn.addEventListener("click", displayToggle());

// add an event listener to the Add Book button to submit the form's inputs and call the addBookToLibrary function and displayBook function
// also closing the modal by adding display none back to it
// separately add event listeners to the x button and blackish background that "close" the modal by
// adding display none back to the modal
let myLibrary = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 295,
        read: false
    }
];

// DOM objects
$newBookButton = document.querySelector("#new-book-btn");
$table = document.querySelector(".book-table");
$tbody = document.querySelector("tbody");

$modalForm = document.querySelector(".modal-form");
$title = document.querySelector("#book-title");
$author = document.querySelector("#author");
$pages = document.querySelector("#pages");
$read = document.querySelector("#read");

// constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  };


const addBookToLibrary = () => {
    let title = $titleInput.value;
    let author = $authorInput.value;
    let pages = $pagesInput.value;
    let read = readValue();
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function readValue() {
    if($form.querySelector('input[name="read"]'.value == "yes")) return true;
    else return false;
}

// a function that loops through the myLibrary array and displays them in the table
// two loops, first one to create a row element for each book, the second nested loop to create and append
// table cells to that row with the book's data


function displayBook(myLibrary) {
  const table = document.getElementById("table");
  for (let i = 0; i < myLibrary.length; i++) {
    const row = table.insertRow(-1);
    for (let j = 0; j <= myLibrary.length + 1; j++) {
      const cell = row.insertCell(-1);
      cell.innerHTML = myLibrary[i][bookProperties[j]];
    }
  }
}


// add an event listener to the New Book button that pops out the modal by removing display none
const newBookBtn = document.getElementById("new-book-btn");
function displayToggle() {
  const modal = document.getElementById("modal");
  modal.classList.remove("hidden");
}
newBookBtn.addEventListener("click", displayToggle);

// add an event listener to the Add Book button to submit the form's inputs and call the addBookToLibrary function and displayBook function
// also closing the modal by adding display none back to it
const bookTitle = document.getElementById("book-title").value;
const bookAuthor = document.getElementById("author").value;


// event listeners to hide the modal when clicking the cancel button, modal background, or pressing the escape key
const closeBtn = document.querySelector(".close-btn");
function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
}
closeBtn.addEventListener("click", closeModal);

const modalBackground = document.querySelector(".form-modal-background");
modalBackground.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const modal = document.getElementById("modal");
    modal.classList.add("hidden");
  }
});

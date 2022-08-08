let myLibrary = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 295,
        read: "no"
    },
    {
        title: "Harry Potter",
        author: "JK Rowling",
        pages: 123,
        read: "yes"
    }
];

// DOM objects
const newBookButton = document.querySelector("#new-book-btn");
const table = document.querySelector(".book-table");
const tbody = document.querySelector("tbody");

const modalForm = document.querySelector(".modal-form");
const title = document.querySelector("#book-title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const bookCards = document.querySelector(".book-cards");

// constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  };


const addBookToLibrary = () => {
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let read = readValue();
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}
const addBookButton = document.querySelector(".add-book-btn");
addBookButton.addEventListener("click", addBookToLibrary);

function readValue() {
    if(form.querySelector('input[name="read"]'.value == "yes")) {
        return true;
    } else {
    return false;
    }
}

// a function that creates a div with the title as a header and appends it to book-cards container
function displayBook(myLibrary) {
    for (let i=0; i < myLibrary.length; i++) {
    const div = document.createElement("div");
    const h1 = document.createElement("h2");
    const p = document.createElement("p");
    h1.textContent = myLibrary[i]["title"];
    p.textContent = myLibrary[i]["author"] + " " + myLibrary[i]["pages"] + " " + myLibrary[i]["read"];
    div.appendChild(h1);
    div.appendChild(p);
    bookCards.appendChild(div);
    }
}
displayBook(myLibrary);

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

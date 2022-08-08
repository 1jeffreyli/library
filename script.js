let myLibrary = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 295,
    read: "no",
  },
  {
    title: "Harry Potter",
    author: "JK Rowling",
    pages: 123,
    read: "yes",
  },
];

// DOM objects
const newBookButton = document.querySelector("#new-book-btn");
const bookCards = document.querySelector(".book-cards");

// constructor
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// a function that creates a div with the title as a header and appends it to book-cards container
function displayBook(myLibrary) {
  bookCards.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    div.classList.add("book-card");
    h2.textContent = myLibrary[i]["title"];
    p.textContent =
      "By " +
      myLibrary[i]["author"] +
      ", " +
      myLibrary[i]["pages"] +
      " pages, " +
      myLibrary[i]["read"];
    div.appendChild(h2);
    div.appendChild(p);
    bookCards.appendChild(div);
  }
}
displayBook(myLibrary);

function addBookToLibrary(title, author, pages, read) {
  newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function addFromForm() {
  const title = document.querySelector("#book-title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").value;
//   const form = document.getElementById("form").submit();
  addBookToLibrary(title, author, pages, read);
}
addFromForm();
// form.addEventListener("click", displayBook(myLibrary));

const addBookButton = document.querySelector(".add-book-btn");
addBookButton.addEventListener("click", addBookToLibrary);

// add an event listener to the New Book button that pops out the modal by removing display none
const newBookBtn = document.getElementById("new-book-btn");
function displayToggle() {
  const modal = document.getElementById("modal");
  modal.classList.remove("hidden");
}
newBookBtn.addEventListener("click", displayToggle);

// add an event listener to the Add Book button to submit the form's inputs and call the addBookToLibrary function and displayBook function
// also closing the modal by adding display none back to it

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

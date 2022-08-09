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
const form = document.querySelector("form");

// constructor
class Book {
  constructor(title, author, pages, read) {
    this.title = form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value;
    this.read = form.read.value;
  }
}

// a function that creates a div with the title as a header and appends it to book-cards container
function displayBook(myLibrary) {
  bookCards.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const removeContainer = document.createElement("div");
    const remove = document.createElement("div");
    div.classList.add("book-card");
    removeContainer.classList.add("cursor");
    remove.classList.add("material-icons");
    remove.innerText = "delete";
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
    removeContainer.appendChild(remove);
    div.appendChild(removeContainer);
    bookCards.appendChild(div);
  }
}
displayBook(myLibrary);

// grabs the input values from the form and creates a new book object that is pushed to myLibrary array
// the array then stores the updated array to local storage and displayBook iterates through the updated myLibrary
// finish by clearing the form's data for future entries and closing the modal/popup
function addBookToLibrary() {
  event.preventDefault();
  const title = document.querySelector("#book-title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").value;
  newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  storeLocally();
  displayBook(myLibrary);
  document.querySelector("form").reset();
  closeModal();
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector(".add-book-btn")
    .addEventListener("click", addBookToLibrary);
});

function storeLocally() {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

// add an event listener to the New Book button that pops out the modal by removing display none
const newBookBtn = document.getElementById("new-book-btn");
function displayToggle() {
  const modal = document.getElementById("modal");
  modal.classList.remove("hidden");
}
newBookBtn.addEventListener("click", displayToggle);

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

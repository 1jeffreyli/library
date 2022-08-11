let myLibrary = [
  // {
  //   title: "The Hobbit",
  //   author: "J.R.R. Tolkien",
  //   pages: 295,
  //   read: "no",
  // },
  // {
  //   title: "Harry Potter",
  //   author: "JK Rowling",
  //   pages: 123,
  //   read: "yes",
  // },
];
let newBook;

// constructor
class Book {
  constructor() {
    this.title = form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value;
    this.read = form.read.checked;
  }
}

function addBookToLibrary() {
  event.preventDefault();
  newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  storeLocally();
  render();
  document.querySelector("form").reset();
  closeModal();
}

function render() {
  const library = document.querySelector(".book-cards");
  const books = document.querySelectorAll(".book-card");
  books.forEach((book) => library.removeChild(book));
  for (let i = 1; i < myLibrary.length; i++) {
    displayBook(myLibrary[i]);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector(".add-book-btn")
    .addEventListener("click", addBookToLibrary);
});

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

// a function that creates a div with the title as a header and appends it to book-cards container
function displayBook(item) {
  const bookshelf = document.querySelector(".book-cards");
  const bookDiv = document.createElement("div");
  const titleHeader = document.createElement("h2");
  const contentDiv = document.createElement("div");
  const readBtn = document.createElement("button");
  const removeBtn = document.createElement("button");

  bookDiv.classList.add("book-card");
  addIndex();
  titleHeader.textContent = item.title;
  bookDiv.appendChild(titleHeader);
  contentDiv.textContent =
    "By " + item.author + ", " + item.pages + ", " + item.read;
  bookDiv.appendChild(contentDiv);

  readBtn.classList.add("read-button");
  bookDiv.appendChild(readBtn);
  if (item.read === false) {
    readBtn.textContent = "Not Read Yet";
    readBtn.style.backgroundColor = "red";
  } else {
    readBtn.textContent = "Read";
    readBtn.style.backgroundColor = "green";
  }
  
  removeBtn.classList.add("material-icons");
  removeBtn.textContent = "delete";
  removeBtn.setAttribute("id", "removeBtn");
  bookDiv.appendChild(removeBtn);

  bookshelf.appendChild(bookDiv);

  removeBtn.addEventListener("click", () => {
    myLibrary.splice(myLibrary.indexOf(item), 1);
    storeLocally();
    render();
  });
}

function storeLocally() {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function restore() {
  if (!localStorage.myLibrary) {
    render();
  } else {
    let objects = localStorage.getItem("myLibrary");
    objects = JSON.parse(objects);
    myLibrary = objects;
    render();
  }
}
restore();

function addIndex() {
  myLibrary.forEach((item, i) => {
    item.id = i;
  });
}

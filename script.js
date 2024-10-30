// storage for books
const myLibrary = [];

const booksContainer = document.querySelector(".books-container");

// constructor function for books
function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

// adding books to storage
function addBookToLibrary(title, author, pages, readStatus) {
  const book = new Book(title, author, pages, readStatus);
  myLibrary.push(book);
}

// displaying books from storage
function displayBooks() {
    // clear the book container first
    booksContainer.innerHTML = '';
    // for each element inside myLibrary create a book display
    myLibrary.forEach((book, index) => {
      const bookElement = document.createElement("div");
      // add class for design
      bookElement.classList.add("book-element");
  
      const title = document.createElement("p");
      const author = document.createElement("p");
      const pages = document.createElement("p");
      const readStatus = document.createElement("p");
      const changeStatusButton = document.createElement("button");
      const deleteBookButton = document.createElement("button");

      title.classList.add("book-element-texts");
      author.classList.add("book-element-texts");
      pages.classList.add("book-element-texts");
      readStatus.classList.add("book-element-texts");
      changeStatusButton.classList.add("book-element-buttons");
      deleteBookButton.classList.add("book-element-buttons");

      title.textContent = "Title: " + book.title;
      author.textContent = "Author: " + book.author;
      pages.textContent = "Pages: " + book.pages;
      readStatus.textContent = "Status: " + `${book.readStatus ? "Read" : "Not read yet"}`;
      changeStatusButton.textContent = "Change Status";
      deleteBookButton.textContent = "Delete Book";

      changeStatusButton.addEventListener("click", () => {
        if (book.readStatus) {
          book.readStatus = false;
          readStatus.textContent = "Status: Not read yet";
        } else {
          book.readStatus = true;
          readStatus.textContent = "Status: Read";
        }
      });

      deleteBookButton.addEventListener("click", () => {
        bookElement.remove();
        myLibrary.splice(index, 1);
        displayBooks();
      });

      bookElement.appendChild(title);
      bookElement.appendChild(author);
      bookElement.appendChild(pages);
      bookElement.appendChild(readStatus);
      bookElement.appendChild(changeStatusButton);
      bookElement.appendChild(deleteBookButton);
      booksContainer.appendChild(bookElement);
    });
}

const bookTitle = document.querySelector("#book-title-input");
const bookAuthor = document.querySelector("#book-author-input");
const bookPages = document.querySelector("#book-pages-input");
const readStatusInput = document.querySelector("#read-status-input");
const newBookButton = document.querySelector("#new-book-button");
const newBookModal = document.querySelector("#new-book-modal");
const addBookButton = document.querySelector("#add-book");
const cancelButton = document.querySelector("#cancel");

newBookButton.addEventListener("click", () => {
  newBookModal.showModal();
});

addBookButton.addEventListener("click", (event) => {
  event.preventDefault(); // prevent the form from being submitted
  newBookModal.close(addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, readStatusInput.checked));
  displayBooks();
});

cancelButton.addEventListener("click", (event) => {
  event.preventDefault();
  newBookModal.close();
});
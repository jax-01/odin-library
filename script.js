// storage for books
const myLibrary = [];

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
  const booksContainer = document.querySelector(".books-container");

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

      title.textContent = "Title: " + book.title;
      author.textContent = "Author: " + book.author;
      pages.textContent = "Pages: " + book.pages;
      readStatus.textContent = "Status: " + `${book.readStatus ? "Read" : "Not read yet"}`;
      changeStatusButton.textContent = "Change Status";
      deleteBookButton.textContent = "Delete Book";

      bookElement.appendChild(title);
      bookElement.appendChild(author);
      bookElement.appendChild(pages);
      bookElement.appendChild(readStatus);
      bookElement.appendChild(changeStatusButton);
      bookElement.appendChild(deleteBookButton);
      booksContainer.appendChild(bookElement);

      changeStatusButton.addEventListener("click", () => {
        if (book.readStatus) {
          book.readStatus = false;
          readStatus.textContent = "Status: Not read yet";
        } else {
          book.readStatus = true;
          readStatus.textContent = "Status: Read";
        }
      });
    });
}
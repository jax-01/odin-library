// storage for books
const myLibrary = [];

// constructor function for books
function Book() {
  
}

// add books to storage
function addBookToLibrary(title, author, pages, readStatus) {
  const book = new Book(title, author, pages, readStatus);
  myLibrary.push(book);
}
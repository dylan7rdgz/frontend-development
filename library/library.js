function Book(title, author, numPages, readBook, id=crypto.randomUUID(), ) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.readBook = readBook;
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.numPages}, ${this.readBook}`;
  };
  this.infoAsArray = function() {
    return [this.id, this.title, this.author, this.numPages, this.readBook];
  }
}

Book.prototype.toggleRead = function(readBook) {
  this.readBook = !readBook;
};

const myLibrary = [];
function addBookToLibrary(title, author, numPages, readBook) {
    const book = new Book(title, author, numPages, readBook);
    myLibrary.push(book);
}

addBookToLibrary("Crime and Punishment", "Dostoyevsky", 550, true);
addBookToLibrary("The Brothers Karamazov", "Dostoyevsky", 650, true);
addBookToLibrary("War & Peace", "Leo Tolstoy", 800, false);
console.log("myLibrary: ", myLibrary);

const tableBody = document.getElementById("tbody-book-display");
console.log("tableBody: ", tableBody);


function displayBooks(myLibrary) {
    for (let book of myLibrary) {
        const bookInfoArr = book.infoAsArray();
        console.log("bookInfoArr: ", bookInfoArr);
        const tableRow = document.createElement("tr");
        for (let bookInfo of bookInfoArr) {
          const tableCell = document.createElement("td");
          tableCell.textContent = bookInfo;
          tableRow.appendChild(tableCell);  
        }

        const deleteBookButton = document.createElement("button"); // Think of an optimization
        deleteBookButton.id = book.id;
        deleteBookButton.textContent = "Delete Book";
        tableRow.appendChild(deleteBookButton);
        
        const readCheckBox = document.createElement("input");
        readCheckBox.type = "checkbox";
        readCheckBox.id = "read-check-box";
        console.log("Book Info Array Read check box: ", book.readBook);
        readCheckBox.checked = book.readBook;
        tableRow.appendChild(readCheckBox);
        
        // const readCheckBox = document.querySelector("read-check-box");
        readCheckBox.addEventListener("click", (event) => {
          //! const bookIds = event.target.parentElement.childNodes.map(e => e.childNodes.textContent);
          // !const bookIds = Array.from(myLibrary)
          // !                .map(e => e.textContent.trim());
          console.log("->", typeof myLibrary);
          console.log("->", myLibrary)
          // const bookRow = document.querySelector(`#${bookId}`);
          const bookIds = myLibrary.map(e=>e.id);
          const currentBookId = Array.from(event.target.parentElement.childNodes)[0].textContent;
          console.log("current book id: ", currentBookId);
          console.log("Book Ids: ", bookIds);
          const book = myLibrary.find(book => book.infoAsArray()[0] === currentBookId);
          console.log("Book: ", book);
          book.toggleRead(book.readBook);
        })  

        console.log("tableRow: ", tableRow);
        tableBody.appendChild(tableRow);
    }
}

displayBooks(myLibrary);

const addBookButton = document.querySelector("#add-book");
const addBookDialog = document.querySelector("#add-book-dialog");
const modalCloseButton = document.querySelector("#close-book");

// "Show the dialog" button opens the dialog modally
addBookButton.addEventListener("click", () => {
  addBookDialog.showModal();
});

// "Close" button closes the dialog
modalCloseButton.addEventListener("click", () => {
  addBookDialog.close();
});

// const confirmBtn = document.getElementById("confirmBtn");

// confirmBtn.addEventListener("click", (event) => {
//   event.preventDefault();
//   const title = document.getElementById("title");
//   const author = document.getElementById("author");
//   const numPages = document.getElementById("numPages");
//   debugger;
//   if (title.validity.tooLong) {
//     validationMessage = "Title is too long";
//   }
// });

const confirmBtn = document.getElementById("confirmBtn");
const form = confirmBtn.closest("form");
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity(); // Shows built-in error messages and highlights invalid fields
    return; // Prevent further actions if invalid
  }
  // Proceed with form submission logic here
});




const titleInput = document.getElementById("title");
titleInput.setAttribute("maxlength", 10);
titleInput.addEventListener("input", (event) => {
  debugger;
  if (titleInput.validity.tooShort) {
    titleInput.setCustomValidity("Title is too short");
    // titleInput.classList.add("invalid");
  } else {
    titleInput.setCustomValidity(""); // Clear the message
  }
  titleInput.reportValidity(); 
});

titleInput.addEventListener("input", (event) => {
  debugger;
  if (titleInput.validity.tooLong) {
    titleInput.setCustomValidity("Title is too long");
  } else {
    titleInput.setCustomValidity(""); // Clear the message
  }
  titleInput.reportValidity(); 
});










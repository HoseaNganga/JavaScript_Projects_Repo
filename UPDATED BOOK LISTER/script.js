//GET RELEVANT DOM ELEMENTS
const filterForm = document.getElementById(`filterForm`);
const filterInput = document.getElementById(`filterInput`);
const addBookForm = document.getElementById(`addBookForm`);
const addBookInput = document.getElementById(`addBookInput`);
const submitButton = document.getElementById(`submitButton`);
const ulEl = document.getElementById(`listItems`);

//GET ALREADY STORED VALUE FROM LOCAL STORAGE
const storedListEl = JSON.parse(localStorage.getItem(`bookList`) || `[]`);

//LOOP THROUGH THE STORED VALUES
storedListEl.forEach((listitem) => {
  addBook(listitem);
});

//ADD EVENT LISTENER TO ADDBOOK FORM TO LISTEN TO SUBMIT EVENT ON THE SUBMIT BUTTON
addBookForm.addEventListener(`submit`, (e) => {
  e.preventDefault();
  //FUNCTION THAT CHECKS LOCAL STORAGE FOR EXISTING LIST ITEMS AND ADDS NEW LIST ELEMENTS
  addBook();
});

function addBook(item) {
  //GET INPUT VALUE..SET VARIABLE TO LET
  let inputValue = addBookInput.value;
  let inputValueLowerCase = inputValue.toLowerCase();
  if (item) {
    inputValue = item.title;
    inputValueLowerCase = inputValue.toLowerCase();
  }
  //CREATE NEW LIST ELEMENT TO APPEND OUR INPUT VALUE
  const newLiEl = document.createElement(`li`);
  newLiEl.className = `item`;
  newLiEl.appendChild(document.createTextNode(inputValueLowerCase));
  //CREATE A NEW BUTTON TO APPEND TO THE NEW LIST EL
  const newButtonEl = document.createElement(`button`);
  newButtonEl.className = `delete`;
  newButtonEl.appendChild(document.createTextNode(`X`));

  //APPEND THE BUTTON TO THE NEW LIST EL
  newLiEl.appendChild(newButtonEl);
  //APPEND THE NEWLIST EL TO THE UL EL
  ulEl.appendChild(newLiEl);
  //CLEAR THE INPUT FORM
  addBookInput.value = "";
  updateLs();
}

//FUNCTION TO DELETE A LIST ITEM.....ADD EVENT LISTENER TO THE UL ELEMENT TO CHECK FOR BUTTON CLASS
ulEl.addEventListener(`click`, deleteItem);
function deleteItem(e) {
  //IF STATEMENT TO CHECK FOR THE BUTTON TO ENSURE ITS THE ONE BEING CLICKED AND NOT THE LIST
  if (e.target.classList.contains(`delete`)) {
    //GET LIST ELEMENT TO BE DELETED(PARENT ELEMENT OF OUR TARGET BUTTON)
    const childEl = e.target.parentElement;
    ulEl.removeChild(childEl);
  }
  updateLs();
}

//FUNCTION TO FILTER ELEMENTS....ADD EVENT LISTENER TO THE FILTERFORM
filterForm.addEventListener(`input`, searchValue);
function searchValue(e) {
  //GET VALUE BEING TYPED
  const filterInput = e.target.value;
  const filterInputLowerCase = filterInput.toLowerCase();
  const allListEl = document.querySelectorAll(`.item`);
  //LOOP THROUGH THE LIST ELEMENTS TO FILTER VALUES
  Array.from(allListEl).forEach((value) => {
    if (
      value.firstChild.textContent
        .toLowerCase()
        .indexOf(filterInputLowerCase) != -1
    ) {
      value.style.display = "flex";
    } else {
      value.style.display = "none";
    }
  });
  updateLs();
}

//UPDATE LOCAL STORAGE

function updateLs() {
  const allListEl = document.querySelectorAll(`li`);
  const arrayToStoreVal = [];
  Array.from(allListEl).forEach((value) => {
    const bookItem = value.firstChild.textContent.trim();
    arrayToStoreVal.push({ title: bookItem });
  });
  localStorage.setItem(`bookList`, JSON.stringify(arrayToStoreVal));
}

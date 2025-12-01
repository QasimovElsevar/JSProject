const input = document.querySelector('.input');
const clearBtn = document.querySelector('.clear-btn');
const addBtn = document.querySelector('.add-btn');
const plus = document.querySelector('.plus');
const todoList = document.querySelector('.todo-list');
const sortBtn = document.querySelector('.sort-icon')
let isSortedAlph = false
const listArray = [];

clearBtn.addEventListener('click', () => { 
  input.value = ''; 
  input.focus(); });
  
addBtn.addEventListener('click', addPushed);
plus.addEventListener('click', plusPushed)
sortBtn.addEventListener('click', sortArray)

function addPushed() {
  const text = input.value.trim();
  if (!text) return;

  listArray.push(text);
  console.log(listArray);

  input.value = "";

  input.style.display = "none";
  clearBtn.style.display = "none";
  todoList.style.display = "block";
  showList();
}

function showList() {
  todoList.innerHTML = "";

  listArray.forEach((task, index) => {
    const li = document.createElement('li');

    const textSpan = document.createElement('span');
    textSpan.textContent = task;

    const img = document.createElement('img');
    img.src = "Group 77.png";     
    img.classList.add('clear-img')
     

    img.addEventListener('click', () => {
      listArray.splice(index, 1); 
      showList();              
    });

    li.appendChild(textSpan);
    li.appendChild(img);

    todoList.prepend(li);
  });
}

function plusPushed() {
  input.classList.remove('become-list')

  input.style.display = "block";
  clearBtn.style.display = "block";

  todoList.style.display = "none";
}

function sortArray() {
  if (!isSortedAlph) {
  listArray.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
     sortBtn.classList.remove('sort-icon-reverse') 
  sortBtn.classList.add('sort-icon')
  isSortedAlph = true
  } else {
  listArray.sort().reverse()
  isSortedAlph = false
   sortBtn.classList.remove('sort-icon') 
  sortBtn.classList.add('sort-icon-reverse')
 
  }
  changeButton()
  console.log('----------')
  showList()
}

function changeButton() {
  if (!isSortedAlph) {
 
  }
  else {
 
  }
}
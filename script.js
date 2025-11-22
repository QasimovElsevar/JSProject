// Small interactions (optional)
const input = document.querySelector('.input');
const clearBtn = document.querySelector('.clear-btn');
const addBtn = document.querySelector('.add-btn');
const plus = document.querySelector('.plus');
const todoList = document.querySelector('.todo-list');
const sh

clearBtn.addEventListener('click', () => { input.value = ''; input.focus(); });
addBtn.addEventListener('click', addPushed);
plus.addEventListener('click', plusPushed)


function addPushed() {
  input.classList.add('become-list')
  listArray.push(input.value)
  console.log(listArray)

   const text = input.value.trim();
  if (!text) return;

  // Add new task to list
  const li = document.createElement('li');
  li.textContent = text;
  todoList.prepend(li);

  // Hide input + clear
  input.style.display = "none";
  clearBtn.style.display = "none";

  // Show list
  todoList.style.display = "block";
}

function plusPushed() {
  input.classList.remove('become-list')

   input.style.display = "block";
  clearBtn.style.display = "block";

  // Show list
  todoList.style.display = "none";
}



// addBtn.addEventListener('click', () => {


//   // // Delete logic
//   // item.querySelector('.todo-delete').addEventListener('click', () => {
//   //   item.classList.remove('show');       // fade out
//   //   setTimeout(() => item.remove(), 250); // remove after animation
//   // });
// });

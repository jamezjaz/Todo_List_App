const mainContent = document.getElementById('content');
const todos = document.createElement('div');
const todoPara = document.createElement('p');
const mySelect = document.querySelector('#mySelect');
const projectForm = document.querySelector('#projectForm');
const newProjBtn = document.querySelector('#newProjBtn');
const projectInput = document.querySelector('#projectTitle');
const addProjectBtn = document.querySelector('#addProjectBtn');
const todoForm = document.getElementById('todoForm');
const todoTitle = document.getElementById('todoTitle');
const todoDescription = document.getElementById('todoDescription');
const todoDate = document.getElementById('todoDate');
const todoPriority = document.getElementById('todoPriority');
const addTodoBtn = document.getElementById('addTodoBtn');
const newTodoBtn = document.getElementById('newTodoBtn');
const cancelProjBtn = document.querySelector('#cancelProjectBtn');
const cancelTodoBtn = document.querySelector('#cancelTodoBtn');
const delTodoBtn = document.getElementsByClassName('delBtn');
const saveTodoBtn = document.querySelector('#saveTodoBtn');
const header = document.querySelector('.header');
const date = document.querySelector('.date');

const todoContents = todoPara.innerHTML;

export {
  mainContent, todos, todoPara, todoContents, mySelect, projectForm,
  newProjBtn, projectInput, addProjectBtn, todoForm, todoTitle,
  todoDescription, todoDate, todoPriority, addTodoBtn, newTodoBtn,
  cancelProjBtn, cancelTodoBtn, delTodoBtn, saveTodoBtn, header, date,
};
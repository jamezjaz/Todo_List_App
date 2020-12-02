const mainContent = document.getElementById('content');
const todos = document.createElement('div');
const todoPara = document.createElement('p');
const mySelect = document.querySelector('#mySelect');
const projectForm = document.querySelector('#projectForm');
const newProjBtn = document.querySelector('#newProjBtn');
const projectInput = document.querySelector('#projectTitle');
const addProjectBtn = document.querySelector('#addProjectBtn');

const todoContents = todoPara.innerHTML;

export {
  mainContent, todos, todoPara, todoContents, mySelect, projectForm,
  newProjBtn, projectInput, addProjectBtn,
};
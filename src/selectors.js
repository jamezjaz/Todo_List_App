const mainContent = document.getElementById('content');
const todos = document.createElement('div');
const todoPara = document.createElement('p');
const mySelect = document.querySelector('#mySelect');
const option = document.createElement('option');

const todoContents = todoPara.innerHTML;

export {
  mainContent, todos, todoPara, todoContents, mySelect, option,
};
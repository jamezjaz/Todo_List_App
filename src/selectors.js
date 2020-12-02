const mainContent = document.getElementById('content');
const todos = document.createElement('div');
const todoPara = document.createElement('p');
const mySelect = document.querySelector('#mySelect');

const todoContents = todoPara.innerHTML;

export {
  mainContent, todos, todoPara, todoContents, mySelect,
};
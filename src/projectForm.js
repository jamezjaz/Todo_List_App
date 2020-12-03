import {
projectForm, todoForm, addTodoBtn, saveTodoBtn,
} from './selectors';

const projForm = (() => {
  const createProjectForm = () => {
    projectForm.style.display = 'block';
  };

  const hideProjectForm = () => {
    projectForm.style.display = 'none';
  };

  const createTodoForm = () => {
    todoForm.style.display = "block";
  };

  const hideTodoForm = () => {
    todoForm.style.display = "none";
  };

  const showCreateTodo = () => {
    addTodoBtn.style.display = 'block';
    saveTodoBtn.style.display = 'none';
  };

  const hideCreateTodo = () => {
    addTodoBtn.style.display = 'none';
    saveTodoBtn.style.display = 'block';
  };

  return {
    createProjectForm,
    hideProjectForm,
    createTodoForm,
    hideTodoForm,
    showCreateTodo,
    hideCreateTodo,
  };
})();

export default projForm;
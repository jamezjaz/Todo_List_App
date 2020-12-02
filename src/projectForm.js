import {
projectForm, todoForm,
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

  return {
    createProjectForm,
    hideProjectForm,
    createTodoForm,
    hideTodoForm,
  };
})();

export default projForm;
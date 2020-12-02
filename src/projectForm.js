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

  return {
    createProjectForm,
    hideProjectForm,
    createTodoForm,
  };
})();

export default projForm;
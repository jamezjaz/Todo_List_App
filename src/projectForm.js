import {
projectForm,
} from './selectors';

const projForm = (() => {
  const createProjectForm = () => {
    projectForm.style.display = 'block';
  };

  const hideProjectForm = () => {
    projectForm.style.display = 'none';
  };

  return {
    createProjectForm,
    hideProjectForm
  };
})();

export default projForm;
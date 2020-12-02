import projectObj from './project';
import todoObj from './todo';
import {
  mainContent, todos, todoPara, todoContents, mySelect, projectForm,
  newProjBtn, projectInput, addProjectBtn,
} from './selectors';
import projForm from './projectForm';

const allProjects = [];

const selectOption = () => {
  allProjects.forEach((proj) => {
    const option = document.createElement('option');
    option.innerHTML = proj.projectTitle;
    mySelect.appendChild(option);
  });
};

mySelect.onchange = () => {
  showCurrentProject(mySelect.value);
};

const showCurrentProject = (currentProject) => {
  allProjects.forEach((proj) => {
    if (proj.projectTitle === currentProject) {
      if (proj.todoList.length > 0) {
        for (let i = 0; i < proj.todoList.length; i += 1) {
          todoPara.innerHTML = proj.todoList[i].title;
          todos.appendChild(todoPara);
          mainContent.appendChild(todos);
        }
      } else {
        todoPara.innerHTML = '<h3 class="text-danger font-weight-bold">No Todos! Create one...</h3>';
      }
    }  
  });
};

const defaults = () => {
  const defaultProject = projectObj('Default Project');
  const secondProject = projectObj('second Project');
  const defaultTodo = todoObj('Task 1', 'Default', '21/11/2020', 'High');
  const secondTodo = todoObj('Second Task', 'Description', '01/01/2021', 'Medium');
  defaultProject.todoList.push(defaultTodo);
  secondProject.todoList.push(secondTodo);
  allProjects.push(defaultProject);
  allProjects.push(secondProject);
  const currentProject = defaultProject;
  showCurrentProject(currentProject.projectTitle);
  selectOption();
};

const createProject = (project) => {
  const newProject = projectObj(project);
  allProjects.push(newProject);
  mySelect.innerHTML = '';
  selectOption();
  projForm.hideProjectForm();
  alert('Project created successfully');
};

const validateProjInput = (e) => {
  e.preventDefault();
  if (projectInput.value === '') {
    alert('Project cannot be empty');
  } else {
    createProject(projectInput.value);
  }
};

defaults();

newProjBtn.addEventListener('click', () => {
  projForm.createProjectForm();
});

addProjectBtn.addEventListener('click', (e) => {
  validateProjInput(e);
});
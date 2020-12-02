import projectObj from './project';
import todoObj from './todo';
import {
  mainContent, todos, todoPara, todoContents, mySelect, option,
} from './selectors';

const allProjects = [];

const selectOption = () => {
  allProjects.forEach((proj) => {
    option.innerHTML = proj.projectTitle;
    mySelect.appendChild(option);
  });
};

const showCurrentProject = (currentProject) => {
  allProjects.forEach((proj) => {
    if (proj.projectTitle === currentProject) {
      if (proj.todoList.length > 0) {
        for (let i = 0; i < proj.todoList.length; i += 1) {
          todoPara.innerHTML = proj.todoList[i].title;
          todos.appendChild(todoPara);
          mainContent.appendChild(todos);
          alert('Project created successfully');
        }
      } else {
        todoDetails.innerHTML = 'No Todos';
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

defaults();

mySelect.onchange = () => {
  showCurrentProject(mySelect.value);
};
import projectObj from './project';
import todoObj from './todo';
import {
  mainContent, todos, todoPara, todoContents,
} from './selectors';

const allProjects = [];

const showCurrentProject = (currentProject) => {
  allProjects.forEach((proj) => {
    if (proj === currentProject) {
      for (let i = 0; i < proj.todoList.length; i += 1) {
        todoPara.innerHTML = proj.todoList[i].title;
        // todoPara.innerHTML = proj.todoList[i].description;
        alert('Project created successfully');
        todos.appendChild(todoPara);
        mainContent.appendChild(todos);
      }
    } else {
      alert('No Todos');
    }
  });
};

const defaults = () => {
  const defaultProject = projectObj('Default Project');
  const defaultTodo = todoObj('Task 1', 'Default', '21/11/2020', 'High');
  defaultProject.todoList.push(defaultTodo);
  allProjects.push(defaultProject);
  const currentProject = defaultProject;
  showCurrentProject(currentProject);
};

defaults();
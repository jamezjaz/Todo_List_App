import projectObj from './project';
import todoObj from './todo';

const allProjects = [];

const showCurrentProject = (currentProject) => {
  allProjects.forEach((proj) => {
    if (proj === currentProject) {
      for (let i = 0; i < proj.todoList.length; i += 1) {
        alert(proj.todoList[i].title);
        alert(proj.todoList[i].description);
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
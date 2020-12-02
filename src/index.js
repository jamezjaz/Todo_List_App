import projectObj from './project';
import todoObj from './todo';
import {
  mainContent, todos, todoPara, todoContents, mySelect, projectForm,
  newProjBtn, projectInput, addProjectBtn, todoForm, todoTitle,
  todoDescription, todoDate, todoPriority, addTodoBtn, newTodoBtn,
  cancelProjBtn, cancelTodoBtn,
} from './selectors';
import projForm from './projectForm';

const allProjects = [];
let currentProject = '';

const selectOption = () => {
  allProjects.forEach((proj) => {
    const option = document.createElement('option');
    option.innerHTML = proj.projectTitle;
    mySelect.appendChild(option);
  });
};

mySelect.onchange = () => {
  currentProject = mySelect.value;
  showCurrentProject(currentProject);
};

const showCurrentProject = (currentProject) => {
  allProjects.forEach((proj) => {
    if (proj.projectTitle === currentProject) {
      todos.innerHTML = '';
      if (proj.todoList.length > 0) {
        for (let i = 0; i < proj.todoList.length; i += 1) {
          const todoDiv = document.createElement('div');
          todoDiv.classList.add('todoDiv');
          let todoDetails = `Title: ${proj.todoList[i].title} </br></br>`;
          todoDetails += `Description: ${proj.todoList[i].description} </br></br>`;
          todoDetails += `Date: ${proj.todoList[i].dueDate} </br></br>`;
          todoDetails += `Priority: ${proj.todoList[i].priority} </br></br>`;
          todoDiv.innerHTML = todoDetails;
          const editBtn = document.createElement('button');
          const deleteBtn = document.createElement('button');
          editBtn.innerHTML = '<i class="fas fa-edit"></i>';
          deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
          editBtn.classList.add('editBtn');
          deleteBtn.classList.add('delBtn');
          todoDiv.appendChild(editBtn);
          todoDiv.appendChild(deleteBtn);
          todos.appendChild(todoDiv);
          mainContent.appendChild(todos);
        }
      } else {
        todos.innerHTML = '<h3 class="text-danger font-weight-bold">No Todos! Create one...</h3>';
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
  currentProject = defaultProject.projectTitle;
  showCurrentProject(currentProject);
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

const createTodo = (title, description, dueDate, priority) => {
  const newTodo = todoObj(title, description, dueDate, priority);
  allProjects.forEach((proj) => {
    if (proj.projectTitle === currentProject) {
      proj.todoList.push(newTodo);
      showCurrentProject(currentProject);
      projForm.hideTodoForm();
      alert(`${proj.todoList.length + ' Todo(s) added succesfully!'}`);
    }
  });
};

const validateProjInput = (e) => {
  e.preventDefault();
  if (projectInput.value === '') {
    alert('Project cannot be empty');
  } else {
    createProject(projectInput.value);
  }
};

const validateTodoInput = (e) => {
  e.preventDefault();
  if (todoTitle.value === '') {
    alert('Title cannot be empty!');
  }
    else if (todoDescription.value === '') {
      alert('Please, add a brief description');
  }
    else if (todoDate.value === '') {
      alert('Date cannot be empty!');
  } else {
    createTodo(todoTitle.value, todoDescription.value, todoDate.value, todoPriority.value);
  }
};

const delTodoBtn = (target) => {
  allProjects.forEach((proj) => {
    if (proj.projectTitle === currentProject) {
      proj.todoList.splice(target.value, 1);
      showCurrentProject(currentProject);
    }
  });
};

const editDelAction = (event) => {
  if (event.classList == 'editBtn') {
    alert("Todo edited successfully");
  } else if (event.classList == 'delBtn') {
    alert("Todo will be deleted...");
    delTodoBtn(event);
  }
};

defaults();

newProjBtn.addEventListener('click', () => {
  projForm.createProjectForm();
  projectForm.reset();
});

addProjectBtn.addEventListener('click', (e) => {
  validateProjInput(e);
});

addTodoBtn.addEventListener('click', (e) => {
  validateTodoInput(e);
  console.log('Todo created!');
});

newTodoBtn.addEventListener('click', () => {
  console.log('Todo Form');
  projForm.createTodoForm();
  todoForm.reset();
});

cancelProjBtn.addEventListener('click', () => { 
  projForm.hideProjectForm();
});

cancelTodoBtn.addEventListener('click', () => { 
  projForm.hideTodoForm();
});

todos.addEventListener('click', (e) => {
  editDelAction(e.target);
  console.log('Working');
});
import projectObj from './project';
import todoObj from './todo';
import {
  mainContent, todos, todoPara, todoContents, mySelect, projectForm,
  newProjBtn, projectInput, addProjectBtn, todoForm, todoTitle,
  todoDescription, todoDate, todoPriority, addTodoBtn, newTodoBtn,
  cancelProjBtn, cancelTodoBtn, saveTodoBtn,
} from './selectors';
import projForm from './projectForm';

let allProjects = [];
let currentProject = '';
let currentTodo = '';

const storeAllProjects = () => {
  const store = JSON.stringify(allProjects);
  localStorage.setItem('allProjects', store);
};

const fetchTodos = () => {
  const store = localStorage.getItem('allProjects');
  allProjects = JSON.parse(store);
  if (!allProjects) {
    allProjects = [];
  }
};

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
          // let todoDetails = `Title: ${proj.todoList[i].title} </br></br>`;
          // todoDetails += `Description: ${proj.todoList[i].description} </br></br>`;
          // todoDetails += `Date: ${proj.todoList[i].dueDate} </br></br>`;
          // todoDetails += `Priority: ${proj.todoList[i].priority} </br></br>`;

          let todoDetails = `
          <div class="card p-4 m-2" style="width: auto;">
            <div class="card-header">
              <h3>Title: ${proj.todoList[i].title}</h3>
            </div>
          </div>`;
todoDetails += `
      <div class="card px-4 m-2" style="width: auto;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Description: ${proj.todoList[i].description}</li>
        </ul>
      </div>
      `;
todoDetails += `
      <div class="card px-4 m-2" style="width: auto;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Date: ${proj.todoList[i].dueDate}</li>
        </ul>
      </div>
      `;
todoDetails += `
      <div class="card px-4 m-2" style="width: auto;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Priority: ${proj.todoList[i].priority}</li>
        </ul>
      </div>
      `;

          todoDiv.innerHTML = todoDetails;
          const editBtn = document.createElement('button');
          const deleteBtn = document.createElement('button');
          const complete = document.createElement('input');
          const label = document.createElement('Label');

          editBtn.innerHTML = 'Edit';
          deleteBtn.innerHTML = 'Delete';
          editBtn.classList.add('editBtn');
          deleteBtn.classList.add('delBtn');
          editBtn.value = i;
          deleteBtn.value = i;
          complete.setAttribute('type', 'checkbox');
          complete.setAttribute('id', 'complete');
          complete.setAttribute('value', 'Complete');
          complete.classList = 'btn btn-success px-4 mx-2';
          label.innerHTML = 'Complete';
          label.classList = 'text-white';

          complete.addEventListener('click', () => {
            if (complete.checked === true) {
              todoDiv.style.backgroundColor = 'green';
            } else {
              todoDiv.style.backgroundColor = '';
            }
          });

          todoDiv.appendChild(editBtn);
          todoDiv.appendChild(deleteBtn);
          todoDiv.appendChild(complete);
          todoDiv.appendChild(label);
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
  fetchTodos();
  showCurrentProject(currentProject);
  selectOption();
};

const createProject = (project) => {
  const newProject = projectObj(project);
  allProjects.push(newProject);
  storeAllProjects();
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
      storeAllProjects();
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
      storeAllProjects();
      showCurrentProject(currentProject);
    }
  });
};

const editDelAction = (event) => {
  if (event.classList == 'editBtn') {
    renderEditTodoForm(event);
  } else if (event.classList == 'delBtn') {
    delTodoBtn(event);
    alert("Todo will be deleted...");
  }
};

const renderEditTodoForm = (target) => {
  projForm.createTodoForm();
  projForm.hideCreateTodo();
  allProjects.forEach((proj) => {
    if (proj.projectTitle === currentProject) {
      const edit = proj.todoList[target.value];
      todoTitle.value = edit.title;
      todoDescription.value = edit.description;
      todoDate.value = edit.dueDate;
      todoPriority.value = edit.priority;
      currentTodo = target.value;
    }
  });
};

const updateTodo = () => {
  projForm.showCreateTodo();
  projForm.hideTodoForm();
  allProjects.forEach((proj) => {
    if (proj.projectTitle === currentProject) {
      const updatedTodo = todoObj(todoTitle.value, todoDescription.value, todoDate.value, todoPriority.value);
      proj.todoList[currentTodo] = updatedTodo;
      const Index = allProjects.findIndex((idx => idx.projectTitle == currentProject));
      allProjects[Index] = proj;
      storeAllProjects();
      showCurrentProject(currentProject);
    }
  });
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
  projForm.showCreateTodo();
});

todos.addEventListener('click', (e) => {
  editDelAction(e.target);
  console.log('Working');
});

saveTodoBtn.addEventListener('click', (e) => {
  e.preventDefault();
  updateTodo();
  console.log('Edited');
});
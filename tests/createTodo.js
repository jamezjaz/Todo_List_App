const TodoObj = (title, description, dueDate, priority) => ({
  title, description, dueDate, priority,
});

const todoForm = {
  title: {
    value: 'Shopping',
  },
  description: {
    value: 'Groceries and toiletries',
  },
  dueDate: {
    value: 22 - 12 - 2020,
  },
  priority: {
    value: 'Medium',
  },
};

const createTodo = () => {
  const title = todoForm.title.value;
  const description = todoForm.description.value;
  const dueDate = todoForm.dueDate.value;
  const priority = todoForm.priority.value;
  return TodoObj(title, description, dueDate, priority);
};

module.exports = createTodo;
const todoObj = (title, description, dueDate, priority) => ({
  title, description, dueDate, priority,
});
  
const todoForm = {
  title: {
    value: ''
  },
  description: {
    value: ''
  },
  dueDate: {
    value: ''
  },
  priority: {
    value: ''
  },
}
  
const clearTodoForm = () => {
  todoForm.title.value = '';
  todoForm.description.value = '';
  todoForm.dueDate.value = '';
  todoForm.priority.value = '';
};
  
it('returns undefined if the form is cleared', () => {
  const clear = clearTodoForm();
  const expectation = {title: '', description: '', dueDate: '', priority: ''};
  expect(clear).toBeUndefined();
});
  
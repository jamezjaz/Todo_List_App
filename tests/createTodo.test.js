const createTodo = require('./createTodo');

test('should pass if the title is correct', () => {
  const newTodo = createTodo();
  expect(newTodo.title).toBe('Shopping');
});

test('should fail if the title is incorrect', () => {
  const newTodo = createTodo();
  expect(newTodo.title).not.toBe('Skating');
});

test('should fail if the title is undefined', () => {
  const newTodo = '';
  expect(newTodo.title).toBeUndefined();
});

test('should pass if the description is correct', () => {
  const newTodo = createTodo();
  expect(newTodo.description).toBe('Groceries and toiletries');
});

test('should pass if there is a match', () => {
  const newTodo = createTodo();
  expect(newTodo.description).toMatch(/toilet/);
});

test('should pass if description is defined', () => {
  const newTodo = createTodo();
  expect(newTodo.description).toBeDefined();
});

test('should pass if the date is correct', () => {
  const newTodo = createTodo();
  expect(newTodo.dueDate).toBe(22-12-2020);
});

test('should fail if the date is undefined', () => {
  const newTodo = '22-12-2020';
  expect(newTodo.dueDate).toBeUndefined();
});

test('should fail if the date is incorrect', () => {
  const newTodo = createTodo();
  expect(newTodo.dueDate).not.toBe('01-09-2020');
});

test('should pass if the priority is correct', () => {
  const newTodo = createTodo();
  expect(newTodo.priority).toBe('Medium');
});

test('should fail if the priority is incorrect', () => {
  const newTodo = createTodo();
  expect(newTodo.priority).not.toBe('High');
});

test('should fail if there is no match', () => {
  const newTodo = createTodo();
  expect(newTodo.priority).not.toMatch(/Lo/);
});
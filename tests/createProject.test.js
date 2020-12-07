const createProject = require('./createProject');

describe('Project Title', () => {
  test('project title to be projectTitle.value', () => {
    expect(createProject.projectTitle).toBe();
  });

  test('project title to be projectTitle.value', () => {
    expect(createProject.projectTitle).toBe(undefined);
  });

  test('Incorrect project title', () => {
    expect(createProject.projectTitle).not.toBe('Workout');
  });
});
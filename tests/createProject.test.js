const createProject = require('./createProject');

describe('Project Title', () => {
  test('project title', () => {
    expect(createProject.projectTitle).toBe();
  });

  test('returns undefined when project title is not defined', () => {
    expect(createProject.projectTitle).toBe(undefined);
  });

  test('returns projectTitle.value when project title is defined', () => {
    const newProj = createProject();
    expect(newProj.projectTitle).toStrictEqual('Workout');
  });

  test('incorrect project title', () => {
    const newProj = createProject();
    expect(newProj.projectTitle).not.toBe('Coding');
  });
});
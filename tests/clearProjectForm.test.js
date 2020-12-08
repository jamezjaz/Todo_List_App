const projectObj = (projectTitle) => ({
    projectTitle,
  });

const projectForm = {
  projectTitle: {
    value: ' '
  },
}

const clearProjectForm = () => {
  projectForm.projectTitle.value = '';
};

test('should return undefined if the form is cleared', () => {
  const action = clearProjectForm();
  const expectation = {projectTitle: ' '};
  expect(action).toBeUndefined();
});

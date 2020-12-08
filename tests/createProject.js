const projectObj = (projectTitle) => ({
  projectTitle,
});

const projectForm = {
  projectTitle: {
    value: 'Workout',
  },
};

const createProject = () => {
  const projectTitle = projectForm.projectTitle.value;

  return projectObj(projectTitle);
};

module.exports = createProject;
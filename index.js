// Import Inquirer (npm package)
const inquirer = require('inquirer');

// Prompts for the manager (should come first since only one manager)
const addManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the team manager?',
    },

    {
      type: 'input',
      name: 'id',
      message: "What is the team manager's employee ID?",
    },

    {
      type: 'input',
      name: 'email',
      message: "What is the team manager's email address?",
    },

    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the team manager's office number?",
    },
  ]);
};
addManager().then(answers => console.log(answers));

// Import Inquirer (npm package)
const inquirer = require('inquirer');

// Import the manager information
const Manager = require('./lib/Manager');

// Empty array to store added team members
var teamMembersArr = [];

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
addManager().then(managerInfo => {
  // define the managerInfo parameter as the name, id, email, and office number properties of the Manager constructor function
  const { name, id, email, officeNumber } = managerInfo;
  // create a new Manager object with the 4 properties
  const manager = new Manager(name, id, email, officeNumber);

  // push the new manager to the team array
  teamMembersArr.push(manager);
  // check to see the new team members array
  console.log(teamMembersArr);
});

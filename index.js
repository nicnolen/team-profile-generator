// Import Inquirer (npm package)
const inquirer = require('inquirer');

// Import the manager information
const Manager = require('./lib/Manager');

// Empty array to store added team members
var teamMembersArr = [];

// Prompt users for manager information (should come first since only one manager)
const addManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the team manager?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      },
    },

    {
      type: 'input',
      name: 'id',
      message: "What is the team manager's employee ID?",
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter a valid employee ID number!');
          return false;
        }
      },
    },

    {
      type: 'input',
      name: 'email',
      message: "What is the team manager's email address?",
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter a valid email address!');
          return false;
        }
      },
    },

    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the team manager's office number?",
      validate: officeNumberInput => {
        if (officeNumberInput) {
          return true;
        } else {
          console.log('Please enter a valid office number!');
          return false;
        }
      },
    },
  ]);
};
// THEN make the new manager object
addManager().then(managerInfo => {
  // define the managerInfo parameter as the name, id, email, and office number properties of the Manager constructor function
  const { name, id, email, officeNumber } = managerInfo;
  // create a new Manager object with the 4 properties
  const manager = new Manager(name, id, email, officeNumber);

  // push the new manager to the team array
  teamMembersArr.push(manager);
  console.log(teamMembersArr);
});

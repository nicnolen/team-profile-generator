// Import Inquirer (npm package)
const inquirer = require('inquirer');

// Import the manager, engineer and intern information
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Empty array to store added team members
var teamMembersArr = [];

// Prompt users for manager information (should come first since only one manager)
const addManager = () => {
  return (
    inquirer
      .prompt([
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
      ])
      // THEN make the new manager object
      .then(managerInfo => {
        // define the managerInfo parameter as the name, id, email, and office number properties of the Manager constructor function
        const { name, id, email, officeNumber } = managerInfo;
        // create a new Manager object with the 4 properties
        const manager = new Manager(name, id, email, officeNumber);

        // push the new manager to the team array
        teamMembersArr.push(manager);
        console.log(teamMembersArr);
      })
  );
};

// Prompt user for employee information
const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'role',
        message: 'What is the role of the new employee?',
        choices: ['Engineer', 'Intern'],
      },

      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the employee?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a valid name!');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the employee's employee ID number?",
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
        message: "What is the employee's email address?",
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
        name: 'github',
        message: 'What is the GitHub username for the employee?',
        when: input => input.role === 'Engineer',
        validate: engineerInput => {
          if (engineerInput) {
            return true;
          } else {
            console.log('Please enter a valid GitHub username!');
            return false;
          }
        },
      },

      {
        type: 'input',
        name: 'school',
        message: 'What school did the intern attend?',
        when: input => input.role === 'Intern',
        validate: internInput => {
          if (internInput) {
            return true;
          } else {
            console.log('Please enter a valid school!');
            return false;
          }
        },
      },
    ])
    .then(employeeInfo => {
      // define data needed for the employeeInfo parameter. Use let since data can change depending on role
      let { name, id, email, role, github, school } = employeeInfo;
      // define the employee variable that gets assigned based on role
      let employee;

      // if the employee's role is an engineer
      if (role === 'Engineer') {
        employee = new Engineer(name, id, email, github);

        console.log(employee);
      } // if the employee's role is an intern
      else if (role === 'Intern') {
        employee = new Intern(name, id, email, school);

        console.log(employee);
      }

      // push the new employee to the team array
      teamMembersArr.push(employee);
    });
};

// Initialize the command line
addManager()
  .then(addEmployee)
  .then(teamMembersArr => {
    console.log(teamMembersArr);
  });

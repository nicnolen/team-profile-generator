// Import employee constructor
const Employee = require('./Employee');

// Intern constructor extends to employee constructor
class Intern extends Employee {
  constructor(name, id, email, school) {
    // call the employee constructor (super means the parent constructor)
    super(name, id, email);

    this.school = school;
  }

  // returning school from the input
  getSchool() {
    return this.school;
  }

  // // override employee role to intern
  // getRole() {
  //   return 'Intern';
  // }
}

// Export intern constructor function to Intern.test.js
module.exports = Intern;

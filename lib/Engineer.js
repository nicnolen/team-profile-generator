// Import employee constructor
const Employee = require('./Employee');

// Engineer constructor function extends to employee constructor
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // calling employee constructor
    super(name, id, email);

    this.github = github;
  }

  // returning github from input
  getGithub() {
    return this.github;
  }

  // override employee role to engineer
  getRole() {
    return 'Engineer';
  }
}

// Export Engineer.js constructor to Engineer.test.js
module.exports = Engineer;

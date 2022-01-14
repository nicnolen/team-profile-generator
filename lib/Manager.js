// Import employee constructor
const Employee = require('./Employee');

// Manager constructor extends employee constructor
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // calling employee constructor
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  // override employee role to manager
  getRole() {
    return 'Manager';
  }
}

// Export this file to other files
module.exports = Manager;

// Create an employee constructor function
class Employee {
  constructor(name, id, email) {
    // setting Employee object's name, id and email values to parameters
    this.name = name;
    this.id = id;
    this.email = email;
  }

  //   getName() {
  //     return this.name;
  //   }

  //   getId() {
  //     return this.id;
  //   }

  //   getEmail() {
  //     return this.email;
  //   }

  //   getRole() {
  //     return 'Employee';
  //   }
}

// Export this file to other files
module.exports = Employee;

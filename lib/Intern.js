// Write a constructor function for the intern object
class Intern {
  constructor(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
  }
  getName() {
    return this.name;
  };
  
  getId() {
    return this.id;
  };
  
  getEmail() {
    return this.email;
  };
  
  getSchool() {
    return this.school;
  };
}

// Export intern constructor function to Intern.test.js
module.exports = Intern;

// Create an employee constructor function
function Employee(name, id, email) {
  // setting Employee object's name, id and email values to parameters
  this.name = name;
  this.id = id;
  this.email = email;
}

Employee.prototype.getName = function () {
  return this.name;
};

Employee.prototype.getId = function () {
  return this.id;
};

Employee.prototype.getEmail = function () {
  return this.email;
}

// Export this file to other files
module.exports = Employee;

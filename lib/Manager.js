// Create a constructor function for Manager
function Manager(name, id, email, officeNumber) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.officeNumber = officeNumber;
}

Manager.prototype.getName = function () {
  return this.name;
};

Manager.prototype.getId = function () {
  return this.id;
};

Manager.prototype.getEmail = function () {
  return this.email;
};

Manager.prototype.getOfficeNumber = function () {
  return this.officeNumber;
};

// Export this file to other files
module.exports = Manager;

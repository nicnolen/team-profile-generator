// Write a constructor function for the intern object
function Intern(name, id, email, school) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.school = school;
}

Intern.prototype.getName = function () {
  return this.name;
};

Intern.prototype.getId = function () {
  return this.id;
};

Intern.prototype.getEmail = function () {
  return this.email;
};

Intern.prototype.getSchool = function () {
  return this.school;
};

// Export intern constructor function to Intern.test.js
module.exports = Intern;

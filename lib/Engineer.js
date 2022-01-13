// Write engineer constructor function
function Engineer(name, id, email, github) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.github = github;
}

Engineer.prototype.getName = function () {
  return this.name;
};

Engineer.prototype.getId = function () {
  return this.id;
};

Engineer.prototype.getEmail = function () {
  return this.email;
};

Engineer.prototype.getRole = function () {
  return 'Engineer';
};

Engineer.prototype.getGithub = function () {
  return this.github;
};

// Export Engineer.js constructor to Engineer.test.js
module.exports = Engineer;

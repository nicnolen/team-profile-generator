// Write engineer constructor function
function Engineer(name, id, email, github) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.github = github;
}

// Export Engineer.js constructor to Engineer.test.js
module.exports = Engineer;

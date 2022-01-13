// Write engineer constructor function
class Engineer {
  constructor(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
  }
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return 'Engineer';
  }

  getGithub() {
    return this.github;
  }
}

// Export Engineer.js constructor to Engineer.test.js
module.exports = Engineer;

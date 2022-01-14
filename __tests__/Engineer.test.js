// Import the engineer constructor function
const Engineer = require('../lib/Engineer.js');

// Make the engineer object
test('make the engineer object', () => {
  const engineer = new Engineer('Nic', 25, 'nicnolen@ymail.com', 'nicnolen');

  expect(engineer.github).toEqual(expect.any(String));
});

// Write a test for the getGithub() method
test('gets the employee github', () => {
  const engineer = new Engineer('Nic', 25, 'nicnolen@ymail.com', 'nicnolen');

  expect(engineer.getGithub()).toEqual(expect.any(String));
});


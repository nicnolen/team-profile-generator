// Import intern constructor function
const Intern = require('../lib/Intern.js');

// Create the intern object
test('created the intern object', () => {
  const intern = new Intern('Nic', 25, 'nicnolen@ymail.com', 'UT Austin');

  expect(intern.school).toEqual(expect.any(String));
});

// Create a test for the getSchool method
test('get intern school', () => {
  const intern = new Intern('Nic', 25, 'nicnolen@ymail.com', 'UT Austin');

  expect(intern.getSchool()).toEqual(expect.any(String));
});

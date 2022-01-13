// Import intern constructor function
const Intern = require('../lib/Intern.js');

// create the intern object
test('created the intern object', () => {
  const intern = new Intern('Nic', 25, 'nicnolen@ymail.com', 'UT Austin');

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});

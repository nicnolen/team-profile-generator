// Import the engineer constructor function
const Engineer = require('../lib/Engineer.js');

// Make the engineer object
test('make the engineer object', () => {
  const engineer = new Engineer('Nic', 25, 'nicnolen@ymail.com', 'nicnolen');

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});

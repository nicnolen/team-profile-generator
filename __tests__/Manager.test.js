// Import Manager.js
const Manager = require('../lib/Manager.js');

// Create a manager object
test('create a manager object', () => {
  const manager = new Manager('Nic', 26, 'nicnolen@ymail.com', 6);

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

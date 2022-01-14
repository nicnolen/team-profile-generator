// Import Manager.js
const Manager = require('../lib/Manager');

// Create a manager object
test('create a manager object', () => {
  const manager = new Manager('Nic', 26, 'nicnolen@ymail.com', 6);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Test to make the role of the manager override to "Manager"
test("overrides the role of the manager to 'Manager'", () => {
  const manager = new Manager('Nic', 26, 'nicnolen@ymail.com', 6);

  expect(manager.getRole()).toEqual('Manager');
});

// Import the employee constructor
const Employee = require('../lib/Employee.js');

// Create the employee object
test('creates an employee object', () => {
  // create a new employee object using the new keyword
  const employee = new Employee('Nic', 25, 'nicnolen@ymail.com')

  // pass in employee name, id and email as the values
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

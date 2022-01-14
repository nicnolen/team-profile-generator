// Import the employee constructor
const Employee = require('../lib/Employee.js');

// Create the employee object
test('creates an employee object', () => {
  // create a new employee object using the new keyword
  const employee = new Employee('Nic', 25, 'nicnolen@ymail.com');

  // pass in employee name, id and email as the values
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

// Gets name from getName()
test('gets employee name', () => {
  const employee = new Employee('Nic', 25, 'nicnolen@ymail.com');

  expect(employee.getName()).toEqual(expect.any(String));
});

// Gets id from getId()
test('gets employee id', () => {
  const employee = new Employee('Nic', 25, 'nicnolen@ymail.com');

  expect(employee.getId()).toEqual(expect.any(Number));
});

// Gets email from getEmail()
test('gets employee email', () => {
  const employee = new Employee('Nic', 25, 'nicnolen@ymail.com');

  expect(employee.getEmail()).toEqual(expect.any(String));
});

// Gets role from getRole()
test("set role of employees to 'employee'", () => {
  const employee = new Employee('Nic', 25, 'nicnolen@ymail.com');

  expect(employee.getRole()).toEqual('Employee');
});

const { default: test } = require('node:test')
const { hasUncaughtExceptionCaptureCallback } = require('process')
const Employee = require('../lib/Employee')
const employee = require('../lib/Employee')
const newEmployee = new Employee('Mark', 01234567, 'mark@gmail.com');

test('creates an employee name',() => {
    expect(newEmployee.name).toBe('Mark')
    expect(newEmployee.id).toBe(01234567);
    expect(newEmployee.email).toBe("mark@gmail.com")

});
test('run test for name of object', () =>)
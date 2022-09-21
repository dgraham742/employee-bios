const { default: test } = require('node:test')
const { hasUncaughtExceptionCaptureCallback } = require('process')
const employee = require('../lib/Employee')

test('creates an employee name',() => {
    const employee = new employee('Jared')

    expect(employee.name).toEqual(
        expect.arrayContaining([expect.any(name)])
    );
})
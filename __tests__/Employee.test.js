const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('should return data the model was contructed with!', () => {
        let employee = new Employee('Bob', '001', 'bob@email.com');

        expect(employee.getId()).toBe('001');
        expect(employee.getName()).toBe('Bob');
        expect(employee.getEmail()).toBe('bob@email.com');
        expect(employee.getRole()).toBe('Employee');
    });
});

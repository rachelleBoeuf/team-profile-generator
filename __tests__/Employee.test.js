const Employee = require('../lib/Employee');
describe('Employee', () => {
    test('testing for correct name', () => {
        var testing = new Employee('nameHere', 5, "emailHere")
        expect(testing.getName()).toBe('nameHere')
    })
    test('testing for correct id', () => {
        var testing = new Employee('nameHere', 5, 'emailHere')
        expect(testing.getId()).toBe(5)
    })
    test('testing for correct email', () => {
        var testing = new Employee('nameHere', 5, 'emailHere')
        expect(testing.getEmail()).toBe('emailHere')
    })
    test('testing for correct id', () => {
        var testing = new Employee('nameHere', 5, 'emailHere')
        expect(testing.getId()).toBe(5)
    })
    test('testing for correct Role', () => {
        var testing = new Employee('nameHere', 5, 'emailHere')
        expect(testing.getRole()).toBe('Employee')
    })
});
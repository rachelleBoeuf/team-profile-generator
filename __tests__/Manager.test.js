const Manager = require('../lib/Manager');
describe('Manager', () => {
    test('testing for correct name', () => {
        var testing = new Manager('nameHere', 5, "emailHere", 5)
        expect(testing.getName()).toBe('nameHere')
    })
    test('testing for correct id', () => {
        var testing = new Manager('nameHere', 5, 'emailHere', 5)
        expect(testing.getId()).toBe(5)
    })
    test('testing for correct email', () => {
        var testing = new Manager('nameHere', 5, 'emailHere', 5)
        expect(testing.getEmail()).toBe('emailHere')
    })
    test('testing for correct 5', () => {
        var testing = new Manager('nameHere', 5, 'emailHere', 5)
        expect(testing.getOfficeNumber()).toBe(5)
    })
    test('testing for correct Role', () => {
        var testing = new Manager('nameHere', 5, 'emailHere', 5)
        expect(testing.getRole()).toBe('Manager')
    })
});
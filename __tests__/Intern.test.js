const Intern = require('../lib/Intern');
describe('Intern', () => {
    test('testing for correct name', () => {
        var testing = new Intern('nameHere', 5, "emailHere", "gitHubUsername")
        expect(testing.getName()).toBe('nameHere')
    })
    test('testing for correct id', () => {
        var testing = new Intern('nameHere', 5, 'emailHere', "gitHubUsername")
        expect(testing.getId()).toBe(5)
    })
    test('testing for correct email', () => {
        var testing = new Intern('nameHere', 5, 'emailHere', "gitHubUsername")
        expect(testing.getEmail()).toBe('emailHere')
    })
    test('testing for correct get School', () => {
        var testing = new Intern('nameHere', 5, 'emailHere', "get School")
        expect(testing.getSchool()).toBe('get School')
    })
    test('testing for correct Role', () => {
        var testing = new Intern('nameHere', 5, 'emailHere', "get School")
        expect(testing.getRole()).toBe('Intern')
    })
});
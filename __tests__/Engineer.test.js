const Engineer = require('../lib/Engineer');
describe('Engineer', () => {
    test('testing for correct name', () => {
        var testing = new Engineer('nameHere', 5, "emailHere", "gitHubUsername")
        expect(testing.getName()).toBe('nameHere')
    })
    test('testing for correct id', () => {
        var testing = new Engineer('nameHere', 5, 'emailHere', "gitHubUsername")
        expect(testing.getId()).toBe(5)
    })
    test('testing for correct email', () => {
        var testing = new Engineer('nameHere', 5, 'emailHere', "gitHubUsername")
        expect(testing.getEmail()).toBe('emailHere')
    })
    test('testing for correct id', () => {
        var testing = new Engineer('nameHere', 5, 'emailHere', "gitHubUsername")
        expect(testing.getId()).toBe(5)
    })
    test('testing for correct gitHubUsername', () => {
        var testing = new Engineer('nameHere', 5, 'emailHere', "gitHubUsername")
        expect(testing.getgitHubUser()).toBe('gitHubUsername')
    })
    test('testing for correct Role', () => {
        var testing = new Engineer('nameHere', 5, 'emailHere', "gitHubUsername")
        expect(testing.getRole()).toBe('Engineer')
    })
});
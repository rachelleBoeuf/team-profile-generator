const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('should return data the model was contructed with!', () => {
        let intern = new Intern('Edwin', '003', 'edwin@email.com', 'UNLV');

        expect(intern.getId()).toBe('003');
        expect(intern.getName()).toBe('Edwin');
        expect(intern.getEmail()).toBe('edwin@email.com');
        expect(intern.getSchool()).toBe('UNLV');
        expect(intern.getRole()).toBe('Intern');
    });
});

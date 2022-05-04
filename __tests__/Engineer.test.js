const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('should return data the model was contructed with!', () => {
        let engineer = new Engineer('Sally', '002', 'sally@email.com', 'sally1985');

        expect(engineer.getId()).toBe('002');
        expect(engineer.getName()).toBe('Sally');
        expect(engineer.getEmail()).toBe('sally@email.com');
        expect(engineer.getGitHubUser()).toBe('sally1985');
        expect(engineer.getRole()).toBe('Engineer');
    });
});

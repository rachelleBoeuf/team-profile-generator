const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('should return data the model was contructed with!', () => {
        let manager = new Manager('Jerry', '004', 'jerry@email.com', 'DEN001');

        expect(manager.getId()).toBe('004');
        expect(manager.getName()).toBe('Jerry');
        expect(manager.getEmail()).toBe('jerry@email.com');
        expect(manager.getOfficeNumber()).toBe('DEN001');
        expect(manager.getRole()).toBe('Manager');
    });
});

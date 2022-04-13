const Employee = require('./Employee.js');
class Intern extends Employee {
    constructor(name, id, email, getSchool) {
        super(name, id, email)
        this.getSchool = getSchool;
    }
    getRole() {
        return 'Intern'
    }
    getSchool() {
        return this.getSchool
    }
};
module.exports = Intern;
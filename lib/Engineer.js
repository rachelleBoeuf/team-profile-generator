const Employee = require('./Employee.js');
class Engineer extends Employee {
    constructor(name, id, email, gitHubUser) {
        super(name, id, email)
        this.gitHubUser = gitHubUser
    }
    getRole() {
        return 'Engineer'
    }
    getGitHubUser() {
        return this.gitHubUser
    }
};
module.exports = Engineer;
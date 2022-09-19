const Employee = require ("./employee")
class Manager extends Employee {
    constructor(name, id, email, office) {
        super (name, id, email)
        this.office = office;
    }
    getGithub () {
        return this.office;
    }
    getRole () {
        return "Manager";
    }
}

module.exports = Manager;
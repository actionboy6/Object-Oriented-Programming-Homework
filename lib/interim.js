const Employee = require ("./employee")
class Interim extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email)
        this.school = school;
    }
    getSchool () {
        return this.school;
    }
    getRole () {
        return "Interim";
    }
}

module.exports = Interim;
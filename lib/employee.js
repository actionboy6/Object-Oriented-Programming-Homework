class Employees {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }
    getName () {
        return this.name
    }
    getEmail () {
        return this.email
    }
    getId () {
        return this.id
    }
    getRole () {
        return "Employee"
    }
}
module.exports = Employees;

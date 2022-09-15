class Employee {
    constructor(name, id, email, role, Github,) {
    this.name = name;
    this.id = id;
    this.email = email, 
    this.role = role,
    this.github = Github
    }
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`ID #: ${this.id}`);
        console.log(`Work Email ${this.email}`);
    }
}
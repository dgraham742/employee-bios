const Employee = require('./Employee');

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, role, email);
        this.id= id;
        this.name = name;
        this.role = "Manager";
        this.email = email;
        this.officeNumber = officeNumber
    }
}


const matt = new Manager(1, "matt", "matt@fakeemail.com", 201)
console.log(matt);
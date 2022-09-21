const intern = require('./Employee')

class Intern extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, role, email);
        this.id = id;
        this.name = name;
        super.role = "Manager";
        this.email = email;
        this.officeNumber = officeNumber;
    }
}

const phil = new intern(2, "phil", "phil@fakeemail.com", 202)
console.log(phil)
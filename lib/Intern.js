const { getDiffieHellman, getRandomValues } = require('crypto');
const { getSystemErrorName } = require('util');
const employee = require('./Employee')

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

getName(); {
    return this.name;
}
getId(); {
    return this.id;
}

getEmail(); {
    return this.email;
}

getRole(); {
    return this.role
}
getOfficeNumber(); {
    return this.officeNumber
}

const phil = new intern(2, "phil", "phil@fakeemail.com", 202)
console.log(phil)
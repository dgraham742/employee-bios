const { getDiffieHellman, getRandomValues } = require('crypto');
const { getSystemErrorName } = require('util');
const employee = require('./Employee')

class Engineer extends Employee {
    
    constructor(id, name, role, email, officeNumber) {
        super(id, name, role, email);
        this.id = id;
        this.name = name;
        super.role = "Manager"
        this.email = email;
        this.officeNumber = officeNumber
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
    return this.role;
}
getOfficeNumber(); {
    return this.officeNumber;
}

const sue = new engineer(3, "sue", "sue@fakeemail.com", 202)
console.log(sue)
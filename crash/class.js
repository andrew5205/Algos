// class 

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}


// Instantiate object 
const person1 = new Person('John', 'Doe', '5-8-2020');
const person2 = new Person('Marry', 'Lamp', '10-23-1999');

console.log(person2.getFullName());     // Marry Lamp
console.log(person1);
/*
Person {
    firstName: 'John',
    lastName: 'Doe',
    dob: 2020-05-08T07:00:00.000Z
}
*/


//  Constructur function 
function Person( firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;

    // this.dob = new dob;
    // trans to Date object 
    this.dob = new Date(dob);

    // Create function access to current property 
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}


// Instantiate object
const person1 = new Person('John', 'Doe', '5-8-2020');
console.log(person1.dob);                   // 2020-05-08T07:00:00.000Z

// getFullYear => library function 
console.log(person1.dob.getFullYear());     // 2020
console.log(person1.getBirthYear());        // 2020
console.log(person1.getFullName());         // John Doe

console.log(person1);
/*
dob: Fri May 08 2020 00:00:00 GMT-0700 (Pacific Daylight Time) {}
firstName: "John"
getBirthYear: ƒ ()
getFullName: ƒ ()
lastName: "Doe"
__proto__: Object
*/




// // ***************************************************************** //
// //  Prototype  // 
// //  Constructur function 
// function Person( firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;

//     // this.dob = new dob;
//     // trans to Date object 
//     this.dob = new Date(dob);

//     // Write in prototype in constructur 
//     Person.prototype.getBirthYear = function() {
//         return this.dob.getFullYear();
//     }
//     Person.prototype.getFullName = function() {
//         return `${this.firstName} ${this.lastName}`
//     }

//     // // Create function access to current property 
//     // this.getBirthYear = function() {
//     //     return this.dob.getFullYear();
//     // }
//     // this.getFullName = function() {
//     //     return `${this.firstName} ${this.lastName}`;
//     // }
// }


// // Instantiate object
// const person1 = new Person('John', 'Doe', '5-8-2020');
// const person2 = new Person('Marry', 'Lamp', '10-23-1999');
// console.log(person1.dob);                   // 2020-05-08T07:00:00.000Z

// // getFullYear => library function 
// console.log(person2.dob.getFullYear());     // 1999
// console.log(person2.getBirthYear());        // 1999
// console.log(person2.getFullName());         // Marry Lamp


// /* 
// dob: Sat Oct 23 1999 00:00:00 GMT-0700 (Pacific Daylight Time) {}
// firstName: "Marry"
// lastName: "Lamp"
// __proto__:
// getBirthYear: ƒ ()
// getFullName: ƒ ()
// constructor: ƒ Person( firstName, lastName, dob)
// __proto__: Object
// */







// list 
// parseInt()
// parseFloat()
// Number()
// toString()
// String()



// parseInt()
// conver string into a integer 

// It accepts two arguments. 
// The first argument is the string to convert. 
// The second argument is called the radix. 

// parseInt() method will parse the string value,
// until a non-numeric character is encountered 
// and then it will discard the remainder of the string, 
// returning the integer value.


let text1 = '23text';
let int1 = parseInt(text1, 10);
console.log(parseInt(int1));        // 23 

let text2 = 'text23text';
let int2 = parseInt(text2, 10);
console.log(parseInt(int2));        // NaN


console.log(parseInt(2345));        // 2345

console.log(parseInt("123text"));   // 123
console.log(parseInt("123text678"));   // 123

// ********************************************* //

// parseFloat()

let text3 = "3.14text";
let float1 = parseFloat(text3);
console.log(float1);                 // 3.14 

let text4 = "t3.14text";
let float2 = parseFloat(text4);
console.log(float2);                 // NaN


// ********************************************* //

// Number()
// The Number() method converts a string to a number.
console.log(Number('12345'));       // 12345
console.log(Number('123.45'));      // 123.45
console.log(Number('123.45text'));      // NaN
console.log(Number('123.45text'));      // NaN


// ********************************************* //
// toString()
// take radix as argument

let num = 85;
console.log(num.toString());        // 85
console.log(num.toString(2));       // 1010101
console.log(num.toString(8));       // 125
console.log(num.toString(16));      // 55

// ********************************************* //
let a = 30;
console.log(String(a));             // 30
console.log(typeof(String(a)));     // string
console.log(String(101));           // 101
console.log(typeof(String(101)));   // string


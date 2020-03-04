// list 
// str.length
// str.split() - String.prototype 
// arr.join() - Array.prototype 
// str.charCodeAt() - String.prototype
// str.toUpperCase() - String.prototype

// /* ********************************* */
// Remove blanks
// Get string digits 
// Acronyms



// Strings are immutable

// Once a string is defined, individual
// characters can be referenced by [ ] but not changed.

// To manipulate string characters 
// split() into array -> make individual change -> join() reform to string 



const str = "hello world";
console.log(str.length);    // 11


// split() - String.prototype 
const str2 = "hello world";
console.log(str2.split(""));   // [ 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
console.log(str2.split(" "));   // [ 'hello', 'world' ]


const wordArray = ["hi", "how", "are", "you"];
console.log(wordArray[3].split(""));    // [ 'y', 'o', 'u' ]
console.log(wordArray[3].split(" "));    // [ 'you' ]



// join() - Array.prototype 
const wordArray = ["hi", "how", "are", "you"];
console.log(wordArray.join());  //hi,how,are,you    // "," is used by default 
console.log(wordArray.join(''));  //hihowareyou
console.log(wordArray.join("-"));  //hi-how-are-you
console.log(wordArray.join(" "));  //hi how are you


console.log(1+2+"3"+'4'+5);    // 3345



// toUpperCase() - String.prototype 
function testToUpperCase(str) {
    for (var i = 0; i < str.length; i++) {
        str = str.toUpperCase();
        console.log(str[i]);
    }
    console.log(str)
}
testToUpperCase("The quick brown fox jumps over the lazy dog");     //THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG





/* ************************************************************************************************************************ */
// remove blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. If given the
// string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".
function removeBlank(str) {
    var string = str.split(' ').join('');
    // console.log(str.split(" "));
    return string;
}
console.log(removeBlank(" Pl ayTha tF u nkyM usi c "));

/* ************************************************************************************************************************ */



// Get string digits 
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. 
// Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680
function strDigits(str) {
    var newStr = "";
    for (var i =0; i < str.length; i++) {
        if ( str.charCodeAt(i)> 47 && str.charCodeAt(i) < 58) {
            // console.log(str[i]);
            // console.log(str.charCodeAt(i))
            newStr += str[i];
        }
    }
    return newStr;
}
console.log(strDigits("0s1a3y5w7h9a2t4?6!8?0"));

/* ************************************************************************************************************************ */



// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 
// Given "Live from New York, it's Saturday Night!", return "LFNYISN".
function acronyms(str){
    var newStr = "";
    var arr = str.split(" ");       // slit string to array 
    str = str.toUpperCase();        // all string to uppercase first 

    if(!str.length){
        return null;
    }
    for(var i = 0; i < arr.length; i++){
        if( arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) <= 90 || arr[i].charCodeAt(0) == 45) {
            newStr += arr[i][0];
        }
    }
    return newStr;
}
console.log(acronyms("Live from New York, it's Saturday Night!"));
console.log(acronyms(""));
console.log(acronyms("there's no free lunch - gotta pay yer way."));

/* ************************************************************************************************************************ */
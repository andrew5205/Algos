// list 
// str.length
// str.split() - String.prototype 
// arr.join() - Array.prototype 
// str.slice() - String.prototype
// str.trim() - String.prototype
// str.search() - String.prototype
// str.charCodeAt() - String.prototype
// str.toUpperCase() - String.prototype

// /* ********************************* */
// Remove blanks
// Get string digits 
// Acronyms
// Count Non-Spaces
// Remove Shorter Strings
// String: Reverse
// Is Palindrome


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
const wordArray2 = ["hi", "how", "are", "you"];
console.log(wordArray2.join());  //hi,how,are,you    // "," is used by default 
console.log(wordArray2.join(''));  //hihowareyou
console.log(wordArray2.join("-"));  //hi-how-are-you
console.log(wordArray2.join(" "));  //hi how are you


console.log(1+2+"3"+'4'+5);    // 3345



// slice() String.prototype
const string = "hello, how are you";
console.log(string.slice(2,10));



// trim() - String.prototype
// remove whitespace (spaces, tabs, newlines) from both sides, and return a new string
const myString = "       this string is going to be trimed         ";
console.log(myString.trim());   // this string is going to be trimed



// search() - String.prototype
const beSearchedString = "how are you doing today";
console.log(beSearchedString.search("you"));    // return index of staring char 8


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



// Count Non-Spaces
// Accept a string and return the number of non-space characters found in the string. 
// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).
function countNonSpace(str) {
    var count = 0;
    var arr = str.split("");
    for (var i = 0; i < str.length; i++) {
        if (arr[i].charCodeAt() != 32) {
            count++;
        }
    }
    return count;
}
console.log(countNonSpace("Honey pie, you are driving me crazy"));

/* ************************************************************************************************************************ */



// Remove Shorter Strings
// Given a string array and value (length), remove any strings shorter than length from the array
function removeShorterString(arr, int) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > int) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(removeShorterString(['abcd', 'abcdef', 'abcdefgh', 'abc', 'a', 'abcdefghij', 'abcdefg'], 3));
console.log(removeShorterString(['11','2','345','4','5'], 1));

/* ************************************************************************************************************************ */



// String: Reverse
// Implement reverseString(str) that, given string, returns that string with characters reversed.
// Given "creature", return "erutaerc". Tempting as it seems, do not use the built-in reverse()!
function stringReverse(str) {
    var arr = str.split("");
    var temp = " ";
    for ( var i = 0; i <= arr.length/ 2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 -i] = temp;
        // console.log(arr[i]);
    }
    return arr;
}
console.log(stringReverse('abcdef'));
// console.log(stringReverse(['a', 'b', 'c', 'd', 'e']));


function reverseArray(arr) {
    for (var i = 0; i <= arr.length / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
console.log(reverseArray([1,2,3,4,5,6,7]));

/* ************************************************************************************************************************ */



// Is Palindrome
// Create a function that returns a boolean whether the string is a strict palindrome. 
// For "a x a" or "racecar", return true. 
// Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!", return false.
function isPalindrome(str) {
    var str = str.toLowerCase();
    // console.log(str);
    for (var i = 0; i < str.length/ 2; i++) {
        if (str[i] != str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome('DEFED'));

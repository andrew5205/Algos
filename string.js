// list 
// str.length
// str.split() - String.prototype 
// arr.join() - Array.prototype 
// str.slice() - String.prototype
// str.trim() - String.prototype
// str.search() - String.prototype
// str.charCodeAt() - String.prototype
// str.toUpperCase() - String.prototype
// str.toLowerCase() - String.prototype
// str.replace() - String.prototype
// str.concat() - String.prototype, Array.prototype 
// str.includes() - String.prototype, Array.prototype 
// str.substring() - String.prototype

// /* ********************************* */
// Remove blanks
// Get string digits 
// Acronyms
// Count Non-Spaces
// Remove Shorter Strings
// String: Reverse
// Is Palindrome
// remove duplicate
// print given sting, run-Length Encoding


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
console.log(string.slice(2,10));    //llo, how



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
        // console.log(str[i]);
    }
    console.log(str)
}
testToUpperCase("The quick brown fox jumps over the lazy dog !");     //THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG !



// toLowerCase() - String.prototype 
function testToLowerCase(str) {
    for (var i = 0; i < str.length; i++) {
        str = str.toLowerCase();
    }
    return str;
}
console.log(testToLowerCase("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG !"));    //the quick brown fox jumps over the lazy dog !

/* ************************************************************************************************************************ */
// replace() - String.prototype 
function testReplace(str) {
    var newStr = str.replace("b", "X");
    return newStr;
}
console.log(testReplace("abcabc"));    // aXcabc


function testReplace2(str) {
    var replaceString = /b/gi;      // replace all whatever inside / /gi
    var newStr = str.replace(replaceString, "Y");
    return newStr;
}
console.log(testReplace2("abcabc"));    // aYcaYc

// replace.(/[\W_]/g, "")  // replace non word char and _
// replace.(/[\W]/g, "")  // replace non word char
function testReplaceSpecialChar(str) {
    var newStr = str.replace(/[\W_]/g, "");
    return newStr;
}
console.log(testReplaceSpecialChar("@#^&*$_Abc"));    // Abc
/* ************************************************************************************************************************ */


// concat()
// str.concat()
console.log("It ".concat("is ", "a ", "nice ", 'day ', "!"))    // It is a nice day !

// Array.concat()
arr1 = [1,2,3];
arr2 = [4,5,6];
console.log(arr1.concat(arr2));     // [ 1, 2, 3, 4, 5, 6 ]

/* ************************************************************************************************************************ */

// includes() 
// str.includes()
// The includes() method determines whether an array includes a certain value among its entries, 
// returning true or false as appropriate.

const str1 = "abcde";
console.log(str1.includes("c"));            // true

const str22 = "abc"
const str33 = "ca";
console.log((str22 + str22).includes(str33));  // true


// substring() - String.prototype,

const stringO = "abcdefghijklmnop";
console.log(stringO.substring(0, 3));   // abc
console.log(stringO.substring(2, 3));   // c
console.log(stringO.substring(3));      // defghijklmnop


// substr() - String prototype method 
// given index, return remaining cutoff string = sub string 
function subString(str) {
    for ( var i = 0; i < str.length; i++) {
        console.log(str.substr(i));
    }
}
subString('hello');

// hello
// ello
// llo
// lo
// o


/* ************************************************************************************************************************ */



/* ************************************************************************************************************************ */
// remove blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. If given the
// string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".
function removeBlank(str) {
    var string = str.split(' ').join('');
    // console.log(str.split(" "));
    return string;
}
console.log(removeBlank(" Pl ayTha tF u nkyM usi c "));     //PlayThatFunkyMusic



function removeB(str) {
    let newStr = "";
    for ( let i = 0; i < str.length; i++) {
        if ( str[i] != " ") {
            newStr += str[i];
        }
    }
    return newStr;
}
console.log(removeB(" Pl ayTha tF u nkyM usi c "));         // PlayThatFunkyMusic

/* ************************************************************************************************************************ */

// https://www.w3schools.com/charsets/ref_html_ascii.asp

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
console.log(strDigits("0s1a3y5w7h9a2t4?6!8?0"));    //01357924680


function getAlp(str) {
    let newStr = "";
    for ( let i = 0; i < str.length; i++) {
        if ( (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) || ( str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122 )) {
            newStr += str[i];
        }
    }
    return newStr;
}
console.log(getAlp("ABC@#$def 9025"));      // ABDdef

/* ************************************************************************************************************************ */



// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 
// Given "Live from New York, it's Saturday Night!", return "LFNYISN".
function acronyms(str){
    var newStr = "";
    str = str.toUpperCase();        // all string to uppercase first 
    var arr = str.split(" ");       // slit string to array 

    if(!str.length){
        return null;
    }
    for(var i = 0; i < arr.length; i++) {
        if( (arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) <= 90) || arr[i].charCodeAt(0) == 45) {
            newStr += arr[i][0];
        }
    }
    return newStr;
}
console.log(acronyms("Live from New York, it's Saturday Night!"));      // LFNYISN
console.log(acronyms(""));      // null 
console.log(acronyms("there's no free lunch - gotta pay yer way."));    // TNFL-GPYW

/* ************************************************************************************************************************ */



// Count Non-Spaces
// Accept a string and return the number of non-space characters found in the string. 
// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).
function countNonSpace(str) {
    var count = 0;
    var arr = str.split("");
    for (var i = 0; i < str.length; i++) {
        if (arr[i].charCodeAt() != 32) {        // ASCII #32 => space 
            count++;
        }
    }
    return count;
}
console.log(countNonSpace("Honey pie, you are driving me crazy"));       // 29

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


// spread operator 
const reverse4 = str => [...str].reverse().join('');

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



// ignore white space (spaces, tabs, returns), capitalization and punctuation.
function isPalindromeIgnoreSpace(str) {
    // var newStr = "";
    var str = str.toLowerCase().replace(/[\W_]/g, "");     // or replace(/[^A-Za-z0-9]/g, "")
    // \W metacharacter is used to find a non-word character
    // console.log(str);
    for (var j = 0; j < str.length/2; j++) {
        if (str[j] != str[str.length - 1 - j]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindromeIgnoreSpace('DE FE_D'));

/* ************************************************************************************************************************ */


// remove duplicate string character
function delDup(str) {
    var newStr = "";
    var dict = {};
    for ( var i = 0; i < str.length; i++) {
        if (!dict[str[i]]) {
            newStr += str[i];
            dict[str[i]] = true;
        }
    }
    return newStr;
}
console.log(delDup("abcdeed"));    // abcde


/* ************************************************************************************************************************ */
// print given sting, return character and count // object

function runLenEncoding(str) {
    var dict = {};
    for (var i = 0; i < str.length; i++) {
        if (dict[str[i]]) {
            dict[str[i]]++;
        } else {
            dict[str[i]] = 1;
        }
    }
    return dict;
};
console.log(runLenEncoding("ABBCCCDDDD"));    // { A: 1, B: 2, C: 3, D: 4 }

// better solution for output
// for ( key in obj)
function lenEncoding(str) {
    var dict = {};
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        if (dict[str[i]]) {
            dict[str[i]]++;
        } else {
            dict[str[i]] = 1;
        }
    }
    for ( key in dict ) {
        newStr += key + dict[key];
    }
    return newStr;
};
console.log(lenEncoding("ABBCCCDDDD"));    //A1B2C3D4



function lenEncoding2(str) {
    var dict = {};
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        if (!dict[str[i]]) {
            dict[str[i]] = 1;
        }
        else {
            dict[str[i]]++;
        }
    }
    for ( key in dict ){
        newStr += key + dict[key];
    }
    return newStr;
};
console.log(lenEncoding2("ABBCCCDDDD"));    //A1B2C3D4


function lenEncoding3(str) {
    let count = 0;
    newStr = ''
    for ( let i = 0; i < str.length; i++) {
        count++;
        if ( str[i] != str[i+1]) {
            newStr += str[i] + count;
            count = 0;
        }
    }
    return newStr;
}

console.log(lenEncoding3("AABBCDDDAAC"));       //A2B2C1D3A2C1
console.log(lenEncoding3("AABBBCCCAAccc"));       //A2B3C3A2c3










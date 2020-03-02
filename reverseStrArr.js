
// //  built in method
// split()
// reverse()
// join()
// substr()
// charAt()


// split()
function splitAStr(str) {
    var splitStr = str.split('');
    console.log(splitStr);
    // return str;
}

splitAStr("hello");


// reverse()
// can only use on array 
function reverseAStr(arr) {
    var reverseArr = arr.reverse();
    console.log(reverseArr);
}

reverseAStr([1,2,3,4,5]);


// join()
// only turn array into string 
function ArrayToString(arr) {
    var newStr = arr.join("");
    return newStr;
}

console.log(ArrayToString([1,2,3]));


// chain up split(), reverse(), join()
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

//////////////////////////////////////////////////////////
// using for loop 
function reverseString(str) {
    var newStr = '';
    for ( var i = str.length -1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

console.log(reverseString('hello'));

//////////////////////////////////////////////////////////

// substr() - String prototype method 
// given index, return remaining cutoff string = sub string 
function subString(str) {
    for ( var i = 0; i < str.length; i++) {
        console.log(str.substr(i));
    }
}
subString('hello');



// charAt() - String prototype method 
function showCharAt(str) {
    for ( var i = 0; i < str.length; i++) {
        console.log(i);
        console.log(str.charAt(i));
    }
}
showCharAt("hello");




// using recursion 
function reverseString(str) {
    if (str === "")
        return "";
    else
        return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("hello"));


// Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
// 1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
// 2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
// 3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
// 4th call – reverseString("lo")      will return   reverseString("o")              + "l"
// 5th call – reverseString("o")       will return   reverseString("")               + "o"

// Second part of the recursion method
// The method hits the if condition and the most highly nested call returns immediately

// 5th call will return reverseString("") + "o" = "o"
// 4th call will return reverseString("o") + "l" = "o" + "l"
// 3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
// 2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
// 1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 





// ternary operator 
function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString("hello"));





// swap array 
function swap(indexA, indexB) {
    [indexA ,indexB] = [indexB, indexA];
    // console.log(indexA);
    // console.log(indexB);
    return [indexA, indexB];
}
// swap(3,4);
console.log(swap(5,6));

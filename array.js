// list 
// push() - Array.prototype
// pop() - Array.prototype
// splice() - Array.prototype
// slice() - Array.prototype
// split() - String.prototype
// join() - Array.prototype
// concat() - Array.prototype, Str.prototype
// filter() - Array.prototype
// forEach() - Array.prototype
// insertAt() - 
// removeAt() - 
// swap() - 
// 
// 
// /* ************************************ */
// Remove Duplicate from sorted array 
// Remove Duplicate from non sorted array 
// /* ************************************ */
// 
// 
// sort() - Array.prototype
// filter() - Array.prototype
// includes() - Array.prototype, Str.prototype



// push()
function testArrayPush(arr) {
    arr.push(100);
    console.log(arr);
}
testArrayPush([1,2,3]); //return [ 1, 2, 3, 100 ]


// pop()
function testArrayPop(arr) {
    arr.pop();
    console.log(arr);
}
testArrayPop([1,2,3]);  //return [ 1, 2 ]


// splice(startIndex, delete_count, item) 
function testSplice(arr) {
    arr.splice(2, 0, 'c');
    console.log(arr);
}
testSplice(['a', 'b', 'd', 'e']);  // return [ 'a', 'b', 'c', 'd', 'e' ]

function testSplice2(arr) {
    arr.splice(0, 2);               // start at 0, delete 2 elements
    console.log(arr);
}
testSplice2(['a', 'b', 'd', 'e']);  //[ 'd', 'e' ]

function testSplice3(arr) {
    arr.splice(2);                  // delete 2 elements 
    console.log(arr);
}
testSplice3(['a', 'b', 'd', 'e']);  //[ 'a', 'b' ]


// slice() - returns a shallow copy of a portion of an array into a new array
function testSlice(arr) {
    var newArr = arr.slice(1, 3);
    console.log(newArr);
}
testSlice(['a','b','c','d','e','f']);   //shallow copy [ 'b', 'c' ]



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



// concat()
// str.concat()
console.log("It ".concat("is ", "a ", "nice ", 'day ', "!"))

// Array.concat()
arr1 = [1,2,3];
arr2 = [4,5,6];
console.log(arr1.concat(arr2));




// forEach() - Array.prototype
function testForEach(arr) {
    return arr.forEach( element => { console.log(element)});
}
console.log(testForEach(['cat', 'dog', 'fish']));   // cat 
                                                    // dog 
                                                    // fish

// // regular for loop into array
// const arr = ['cat', 'dog', 'fish'];
// for (i = 0; i < arr.length; i++) { 
// console.log(arr[i])
// }




// insertAt()
function insertAt(arr, val, index) {
    arr.splice(index, 0, val);
    console.log(arr);
    // return arr;
}
insertAt(['1', '2', '3','4', '5'], 100, 3);     //return [ '1', '2', '3', 100, '4', '5' ]
// console.log(insertAt(['1', '2', '3','4', '5'], 100, 3));  


// removeAt()
function removeAt(arr, index) {
    arr.splice(index, 1);
    console.log(arr);
}
removeAt(['1', '2', '3','4', '5'], 3);


// swap()
function swap(int1, int2) {
    return [int2, int1];
}
console.log(swap(10, 20));



/* ****************************************************************************************** */
// Remove Duplicates
// Given a sorted array, remove duplicate values. 
// Because array elements are already in order, all duplicate values will be grouped togethe

// array is sorted 
function removeDup(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != arr[i - 1]) {
            newArr.push(arr[i]);
            console.log(newArr);
        }
    }
    return newArr;
}
console.log(removeDup([1,2,3,3,4,5,6,6,7,7,7]));

// Array not sorted 
// use dict object
function removeDupNotSorted(arr) {
    var dict = {};
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (!dict[arr[i]]) {
            newArr.push(arr[i]);
            dict[arr[i]] = true;
            // console.log(arr[i]);
        }
    }
    return newArr;
}
console.log(removeDupNotSorted([1,2,3,3,4,5,3,6,7,2,7]));

/********************************************************************************************/



// sort() - Array.prototype
// sort() method sorts the elements of an array in place and returns the sorted array.

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);    // expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);    // expected output: Array [1, 100000, 21, 30, 4]


/********************************************************************************************/
// filter() - Array.prototype - take callback function as arg 
var arr = [20, 30, 40, 50, 60, 70, 80, 90];

function largerThen50(arr) {
    return arr > 50;
}

console.log(arr.filter(largerThen50));

/********************************************************************************************/

// includes() - Str.prototype, Array.prototype 

const arr11 = [1,2,3,4,5];
console.log(arr11.includes(3));

const arr21 = ["cat", "dog", "shark"];      // true 
console.log(arr21.includes("shark"));       // true
console.log(arr21.includes("do"));          // false 

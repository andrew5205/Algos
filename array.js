// list 
// push() - Array.prototype
// pop() - Array.prototype
// splice() - Array.prototype
// slice() - Array.prototype
// insertAt() - 
// removeAt() - 
// swap() - 
// 
// 
// /* ************************************ */
// Remove Duplicate from sorted array 
// Remove Duplicate from non sorted array 
// /* ************************************ */




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


// splice()
function testSplice(arr) {
    arr.splice(2, 0, 'c');
    console.log(arr);
}
testSplice(['a', 'b', 'd', 'e']);  // return [ 'a', 'b', 'c', 'd', 'e' ]



// slice() - returns a shallow copy of a portion of an array into a new array
function testSlice(arr) {
    var newArr = arr.slice(1, 3);
    console.log(newArr);
}
testSlice(['a','b','c','d','e','f']);   //shallow copy [ 'b', 'c' ]


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
//  Remove Duplicates
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



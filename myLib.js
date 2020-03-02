// List //
// swap() - swap two int, return as arr 
// random() - Math.random
// floor() - Math.floor
// randomStr() - 
// indexOf() - Array.prototype



// swap array 
function swap(indexA, indexB) {
    [indexA ,indexB] = [indexB, indexA];
    // console.log(indexA);
    // console.log(indexB);
    return [indexA, indexB];
}
// swap(3,4);
console.log(swap(5,6));


// random() 
// 0 to 1 
function testRandom() {
    var randomNumber = Math.random();
    console.log(randomNumber);
}
testRandom();



// floor()
function testFloor() {
    var floorNumber = Math.floor(33/ 10);
    console.log(floorNumber);
}
testFloor();



// random str generator 
function randomStr() {
    var str = '';
    var symbol = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*';
    var maxLength = 7;
    var numOfChar = Math.floor(Math.random() * maxLength) + 3; // at least 3 char, max 10 char
    // console.log(numOfChar);
    for (var i = 0; i <numOfChar; i++){
        str += symbol[Math.floor(Math.random() * symbol.length)];
        // console.log(str);
    }
    return str;
}

console.log(randomStr());



// indexOf() - Array.prototype
function testIndexOf(arr) {
    for (var i = 0; i < arr.length; i++) {
        return arr.indexOf('c');
    }
    // console.log(i);
}

// testIndexOf(['a', 'b', 'c', 'd']);
console.log(testIndexOf(['a', 'b', 'c', 'd']));
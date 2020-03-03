// list 
// random() - returns a randomly generated decimal number between 0 and 1
// floor() - floor is a pessimist
// ceil() - ceil is an optimist
// trunc() - returns the integer part of a number by removing any fractional
// modulo operator - remainer 


function testRandom() {
    return Math.random();
}
console.log(testRandom());



function testFloor(n) {
    return Math.floor(n);
}
console.log(testFloor(5.123));
console.log(testFloor(-5.123));



function testCeil(n) {
    return Math.ceil(n);
}
console.log(testCeil(1.357));
console.log(testCeil(-1.357));



function testTrunc(n) {
    return Math.trunc(n);
}
console.log(testTrunc(9.87654321));
console.log(testTrunc(-9.87654321));



function modulo(num) {
    return num %2; 
}
console.log(modulo(15));
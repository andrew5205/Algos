// list 
// random() - returns a randomly generated decimal number between 0 and 1
// floor() - floor is a pessimist
// ceil() - ceil is an optimist
// trunc() - returns the integer part of a number by removing any fractional
// modulo operator - remainer 
// pow() - return the value to the power 


function testRandom() {
    return Math.random();
}
console.log(testRandom());



function testFloor(n) {
    return Math.floor(n);
}
console.log(testFloor(5.123));      // 5
console.log(testFloor(-5.123));     // -6



function testCeil(n) {
    return Math.ceil(n);
}
console.log(testCeil(1.357));       // 2
console.log(testCeil(-1.357));      // -1 



function testTrunc(n) {
    return Math.trunc(n);
}
console.log(testTrunc(9.87654321));     // 9
console.log(testTrunc(-9.87654321));    // -9



function modulo(num) {
    return num %2; 
}
console.log(modulo(15));        // 1



function testPow(num, power) {
return Math.pow(num, power);
}
console.log(testPow(2,3));




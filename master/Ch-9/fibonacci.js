
// fibonacci

// Write rFib(num). Recursively compute and return numth Fibonacci value. As earlier, 
// treat first two (num = 0, num = 1) Fibonacci vals as 0 and 1. 
// Examples: rFib(2) = 1 (0+1); rFib(3) = 2 (1+1); 
// rFib(4) = 3 (1+2); rFib(5) = 5 (2+3). rFib(3.65) = rFib(3) = 2, rFib(-2) = rFib(0) = 0.


function fib(num) {
    var arr = [0, 1];
    for ( var i = 2; i <= num; i++) {
        arr.push(arr[i - 2] + arr[ i - 1]);
    }
    return arr;
}
console.log(fib(5));


function rFib(num) {
    if ( num < 2) {
        return num;
    } else {
        return rFib(num - 2) + rFib(num - 1);
    }
}
console.log(rFib(5));


function rTenFib(num) {
    return (num < 2) ? num : rTenFib( num - 2) + rTenFib(num - 1);
}
console.log(rTenFib(5));


// * ***************************************************************** * //

// treat first two (num = 1, num = 1) Fibonacci vals as 1 and 1
function fibonacci(num) {
    var arr = [1, 1];
    for ( var i = 2; i <= num; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr;
}
console.log(fibonacci(5));


function rFibonacci(num) {
    if ( num < 2) {
        return 1;
    } else {
        return rFibonacci( num - 2 ) + rFibonacci( num - 1 );
    }
}
console.log(rFibonacci(5));


function rTenFibonacci(num) {
    return ( num < 2) ? 1 : rTenFibonacci( num - 2) + rTenFibonacci( num - 1);
}
console.log(rTenFibonacci(5));


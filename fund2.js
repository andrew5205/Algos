// List
// Fibonacci
// Sum all digit to a number 
// Sum To One Digit 
// IS Prime



/**********************************************************************/


// Fibonacci
// [1,1,2,3,5,8,13,21,34,55,89,144]
// [0,1,1,2,3,5,8,13,21,34,55,89,144]

function fib(n) {
    let arr = [1, 1];
    for ( var i = 2; i <= n; i++) {
        arr.push(arr[i-2] + arr[i - 1]);
    }
    return arr;
}

console.log(fib(5));



// recursion 
function fibRecursive(n) {
    if (n < 2) {
        return n;
    }
    else {
        return fibRecursive( n - 2) + fibRecursive( n - 1);
    }
}

console.log(fibRecursive(5));


// ternary operator 

function fibTernary(n) {
    return n < 2 ? n : fibTernary( n - 2) + fibTernary( n - 1);
}

console.log(fibTernary(5));

/**********************************************************************/


// Sum all digit to a number 
function sumToOne(num) {
    var sum = 0;
    while (num) {
        sum += num % 10;
        num = Math.floor(num /10);
    }
    return sum;
}

console.log(sumToOne(1234567));


// Sum To One Digit 
// Implement sumToOne(num) that
// sums a given integer’s digits repeatedly until the sum is only one digit. Return that one-digit result.
// Example: sumToOne(928) returns 1, because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1.
function SumToOneDigit(num) {
    var temp = num;
    var sum = 0;
    for ( var i = 0; i < num.toString().length; i++) {
        sum = sum + (Math.floor(temp) % 10);
        temp = temp / 10;   //using recursion later, seperate num and temp 
    }
    console.log(num.toString());
    if (sum > 9) {
        return SumToOneDigit(sum);
    }
    return sum;
}

console.log(SumToOneDigit(123456));


/**********************************************************************/


// IS Prime

// Return whether a given integer is prime. Prime numbers are only evenly divisible by themselves and 1.
// Many highly optimized solutions exist, but for now just create one that is easy to understand and debug.
function isPrime(n) {
    for(var i = 2; i < n; i++) {
        if(n % i == 0) {
            return false;
        } else {
            return true;
        }
    }
    // console.log("n is prime");
    // return true;
}
console.log(isPrime(11));


// /**********************************************************************/

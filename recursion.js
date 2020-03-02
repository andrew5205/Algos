

// function pow(x, n) that raises x to a natural power of n

// 1. for loop 

function pow(x, n) {
    let result = 1;

    // multiply result by x n times in the loop
    for (let i = 0; i < n; i++) {
      result *= x;
    }

    return result;
}

console.log(pow(2, 3))


// 2. recursive 
function pow(x, n) {
    if (n == 1) {
        return x;
    } else {                         //consider it as a loop, cuz it call itself again till base condition
      return x * pow(x, n - 1);      // x^n = x * x^n-1
    }
}

console.log(pow(2, 4))




// 3. with tenary operator, make it shorter 

function pow(x, n) {
    return (n == 1) ? x : (x * pow(x, n - 1));
}

console.log(pow(2, 5))
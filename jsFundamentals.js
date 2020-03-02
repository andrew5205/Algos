// JS Fundamentals

// Max, min, and average
// Fizz Buzz 
// Braces Valid



// Max, min, and average
// Objectives:

// Iterate over an array
// Construct a string
// Use the return statement

function mma(arr){
    var max = arr[0];
    var sum = 0;
    var min = arr[0];
    var avg = 0;
    if (arr.length == 0){
        return false;
    }
    for (i = 0; i <arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
        else if(arr[i] < min){
            min = arr[i];
        }
        sum += arr[i];
        avg = sum/ arr.length;
    }
    // console.log(max);
    // console.log(min);
    // console.log(avg);
    console.log("The minimum is "+ min, "maximum number is " + max, "average is " + avg, "sum is" + sum );
}

// arrone = [1,-2,9,4];
// arrone = []
// mma(arrone);
mma([1,-2,9,4]);




// Fizz Buzz 
// Objectives
// Use of the modulus operator
// Familiarity with loops
// Familiarity with conditionals

function fizzbuzz(n){
    if ( n < 0){
        console.log("Parameter must be a positive number !!");
    }
    for (var i = 1; i <=n; i++){
        if ( i%3 == 0 && i%5 == 0){
            console.log("FizzBuzz");
        }
        else if (i%3 == 0 && i%5 != 0){
            console.log("Fizz");
        }
        else if ( i%3 != 0 && i%5 ==0){
            console.log("Buzz");
        }
        else console.log(i);

    }
}

// fizzbuzz(15)
// fizzbuzz(-3)



// Braces Valid
// Objectives:
// Exercise those logic muscles!
// Use data structures (arrays, objects) effectively to complete the challenge.

// my solution // fixed 
function braceVaild (arr){
    let dict = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == "(" || arr[i] == "[" || arr[i] == "{"){
            dict.push(arr[i]);
        }
        else {
            if (dict.length == 0){
                return false;
            }
            let lastvalue = dict[dict.length - 1];
            if ( (arr[i] = ")" && lastvalue === "(") || (arr[i] = "]" && lastvalue === "[") ||(arr[i] = "}" && lastvalue === "{")){
                dict.pop();
            }
            else {
                break;
            }
        }
    }
    return dict.length == 0;
}

console.log(braceVaild("()"));


// awesome solution 
function validBraces(braces){
    var matches = { '(':')', '{':'}', '[':']' };   //using objects dictionary 
    var stack = [];
    var currentChar;

    for (var i = 0; i < braces.length; i++) {
        currentChar = braces[i];

      if (matches[currentChar]) { // opening braces
        stack.push(currentChar);
      } else { // closing braces
        if (currentChar !== matches[stack.pop()]) {
            return false;
        }
    }
    
    }

    return stack.length == 0; // any unclosed braces left?
}

console.log(validBraces("()(})"));


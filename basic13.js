// 1. Print int from 1 to 255 
function Print1to255() {
    for (var i = 1; i <= 255; i++){
        console.log(i);
    }
}
Print1to255();



// 2. Print odd int from 0 To 255
function PrintOdd0To255() {
    for (var i = 0; i <= 255; i++) {
        if (i %2 == 1) {
            console.log(i);
        }
    }
}

PrintOdd0To255();

// 2.1 W/O if condition
function PrintOdd0To255() {
    for (var i = 1; i <= 255; i += 2 ) {
        console.log(i);
    }
}

PrintOdd0To255();



// 3. Print Int And Sum 0 To 255
function PrintSum0To255(){
    var sum = 0;
    for (var i = 0; i <= 255; i++) {
        sum += i;
    }
    console.log(sum);
}

PrintSum0To255();



// 4. Print Array 
function PrintArr(arr) {
    for ( var i =0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

PrintArr([1,2,3,4,5,6]);



// 5. Print Max Of Array
function PrintMaxOfArray(arr) {
    var max = 0 ;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
    console.log("Max is " + max);
}

PrintMaxOfArray([5,1,23,4,56,23,3,8]);



// 6. Print Average Of Array
function AvgArr(arr) {
    var sum = 0;
    var avg = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    avg = sum / arr.length;
    console.log(sum);
    console.log(avg);
}

AvgArr([1,2,3]);



// 7. Return Odds Array 1 To 255
function ReturnOddsArr1To255 () {
    var arr = [];
    for (var i = 0; i < 255; i++) {
        if ( i %2 == 1) {
            arr.push(i);
        }
    }
    console.log(arr);
    // return arr;
}

ReturnOddsArr1To255();



// 8. Square Array Value
function SquVal(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] ** 2 ;
        // console.log(arr[i]);
    }
    return arr;
}
// SquVal([1,2,3]);
console.log(SquVal([1,2,3]));




// 9. Return Array Count Greater Than Y
function ReturnArrayCountGreaterThanY(arr, y) {
    var count = 0;
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            newArr.push(arr[i]);
            count +=1;
            // console.log(arr[i]);
        }
    }
    console.log(count);
    return newArr;
}

ReturnArrayCountGreaterThanY([1,2,3,4,5,6,7,8,9,10,11,12], 5);
// console.log(ReturnArrayCountGreaterThanY([1,2,3,4,5,6,7,8,9,10,11,12], 5));



// 10. Zero Out Array Negative Vals
function ZeroOutNegativeVal(arr){
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
            // console.log(arr[i]);
        }
    }
    return arr;
}

console.log(ZeroOutNegativeVal([1,2,-3,4,-5]));



// 11. Print Max Min Average Array Vals
function PrintMaxMinAverageArrayVals(arr) {
    var sum = 0;
    var avg = 0;
    var max = arr[0];
    var min = arr[0];
    for (var i = 0; i <arr.length; i++) {
        sum += arr[i];
        if (arr[i] > max) {
            max = arr[i];
        }
        else if (arr[i] < min) {
            min = arr[i];
        }
    }
    avg = sum / arr.length;
    console.log('max is ' + max + ', min is ' + min + ', avg is ' + avg);
}

PrintMaxMinAverageArrayVals([1,2,3]);



// 12. Shift Array Vals Left
function ShiftToLeft(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr[i] = arr[i+1];
        newArr[arr.length - 1] = 0;
        // console.log(newArr[i]);
    }
    return newArr;
}

console.log(ShiftToLeft([1,2,3,4,5]));




// 13. Swap String For Array Negative Vals
function SwapStringForArrayNegativeVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'hello';
        }
    }
    // console.log(arr);
    return arr; 
}

console.log(SwapStringForArrayNegativeVals([1,-2,3,-4,5]));



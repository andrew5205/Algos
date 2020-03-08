// list 

// myReverse()
// myToLowerCase()
// process.stdout.write()


// myReverse()
function myReverse(str) {
    var newStr = "";
    for (var i = str.length - 1; i >= 0 ; i--) {
        newStr += str[i];
    }
    return newStr;
}
console.log(myReverse("ABCDEFG"));



// myToLowerCase() 
function myToLowerCase(arr) {
    var newStr = "";
    for ( var i = 0; i < arr.length; i++) {
        if (arr[i] == "A") {
            arr[i] = "a";
        }
        else if (arr[i] == "B") {
            arr[i] = "b";
        }
        else if (arr[i] == "C") {
            arr[i] = "c";
        }
        else if (arr[i] == "D") {
            arr[i] = "d";
        }
        else if (arr[i] == "E") {
            arr[i] = "e";
        }
        newStr += arr[i];
        // do the same with the rest symbol
    }
    // return arr.join("");
    return newStr;
}
console.log(myToLowerCase(["A", "B", "C", "D", "E", "E"]));    // abcdee



// process.stdout.write()
// process.stdout.write(data + " string ")
console.log = function (d) {
    process.stdout.write(d + '\n');
};

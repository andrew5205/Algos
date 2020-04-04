

const add = (arr) => {
    for ( let i = 0; i < arr.length; i++) {
        arr[i] += 5;
    }
    return arr;
}
console.log(add([1,2,3]));   // [ 6, 7, 8 ]



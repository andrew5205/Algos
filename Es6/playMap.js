

// Map() - array1.prototype

function playMap1(arr) {
    let newArr = arr.map( (e) => e +5 );
    return newArr;
}
console.log(playMap1([1,2,3,4,5]));



function playMap2(arr) {
    let newArr = arr.map( () => {
        return "dog";
    });
    return newArr;
}

console.log(playMap2([1,2,3,4,5]));



function playMap3(arr) {
    let newArr = arr.map( (e) => {
        return e%2==0 ? e*2 : e;
    })
    return newArr;
}
console.log(playMap3([1,2,3,4,5]));





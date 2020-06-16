
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

let myMap = new Map();

myMap.set(1, 'a');
myMap.set(2, 'b');
myMap.set(3, 'c');
myMap.set(4, 'd');


// console.log(myMap);


// myMap.clear();
// myMap.delete(key);

// myMap.entries();
// Returns a new Iterator object that contains an array of [key, value] for each element in the Map object in insertion order.
console.log(myMap.entries());   // [Map Entries] { [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ], [ 4, 'd' ] }


// myMap.get(key);
// return value 
console.log(myMap.get(1));      // a

// myMap.has(key);
// return boolean
console.log(myMap.has(1));      // true


// myMap.keys();
// Returns a new Iterator object that contains the keys for each element in the Map object in insertion order.
console.log(myMap.keys());      // Map Iterator] { 1, 2, 3, 4 }


// myMap.values();
// Returns a new Iterator object that contains the values for each element in the Map object in insertion order.
console.log(myMap.values());    // [Map Iterator] { 'a', 'b', 'c', 'd' }






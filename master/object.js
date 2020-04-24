// list 
// Object.assign()
// clone object
// deep clone
// merging Objects
// merging Objects with same property
// Copying symbol-type property
// Properties on the prototype chain
// Primitives will be wrapped to objects
// Exceptions interrupt


// *************     Object.assign()  *******************************// 
// The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. 
// It returns the target object.
console.log("***  Object.assign()  ***");
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

// target changed right after Object.assign
console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }


console.log("***  clone object  ***")
// ***************    clone object  ******************************** // 
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }


console.log("***  deep clone  ***");
// ***************    deep clone   ******************************** // 
function test() {

    let obj1 = { a: 0 , b: { c: 0}};
    let obj2 = Object.assign({}, obj1);
    console.log(JSON.stringify(obj2)); // { "a": 0, "b": { "c": 0}}
    
    obj1.a = 1;
    console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 0}}
    console.log(JSON.stringify(obj2)); // { "a": 0, "b": { "c": 0}}
    
    obj2.a = 2;
    // obj2 is a shallow copy, change shallow copy wont affect orginal object
    console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 0}}
    console.log(JSON.stringify(obj2)); // { "a": 2, "b": { "c": 0}}
    
    obj2.b.c = 3;
    // shallow copy first layer property is reference only 
    // deep layer property under object are actual object, which may be affected by changing shallow copy
    console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 3}}
    console.log(JSON.stringify(obj2)); // { "a": 2, "b": { "c": 3}}
    
    // Deep Clone
    obj1 = { a: 0 , b: { c: 0}};
    let obj3 = JSON.parse(JSON.stringify(obj1));
    obj1.a = 4;
    obj1.b.c = 4;
    console.log(JSON.stringify(obj3)); // { "a": 0, "b": { "c": 0}}
}

test();


console.log("***  merging Objects  ***");
// *************   merging Objects   ****************************** //

const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const objMerge = Object.assign(o1, o2, o3);
console.log(objMerge); // { a: 1, b: 2, c: 3 }
console.log(o1);    // { a: 1, b: 2, c: 3 }, target object itself is changed.
console.log(o2);    // { b: 2 }, source remain the same 
console.log(o3);    // { c: 3 }, source remain the same 



console.log("***  merging Objects with same property  ***");
// *************   merging Objects with same property   ****************************** //

// overwritten by other objects that have the same properties later in the parameters order.

const o21 = { a: 1, b: 1, c: 1 };
const o22 = { b: 2, c: 2 };
const o23 = { c: 3 };

const objMergeSame = Object.assign({}, o21, o22, o23);
console.log(objMergeSame); // { a: 1, b: 2, c: 3 }


console.log("***  Copying symbol-type property  ***");
//  ************      Copying symbol-type property   ******************************** // 

const o31 = { a: 1 };
const o32 = { [Symbol('foo')]: 2 };

const objCopySTP = Object.assign({}, o31, o32);
console.log(objCopySTP); // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)
console.log(Object.getOwnPropertySymbols(objCopySTP)); // [Symbol(foo)]


console.log("***  Properties on the prototype chain  ***");
//  *******   Properties on the prototype chain and non-enumerable properties cannot be copied  ******** // 
const objChain = Object.create({ foo: 1 }, { // foo is on obj's prototype chain.
        bar: {
        value: 2  // bar is a non-enumerable property.
    },
        baz: {
            value: 3,
            enumerable: true  // baz is an own enumerable property.
    }
});

const copyObjChain = Object.assign({}, objChain);
console.log(copyObjChain); // { baz: 3 }


console.log("***  Primitives will be wrapped to objects  ***");
// **********   Primitives will be wrapped to objects   ******************************* //

const v1 = 'abc';
const v2 = true;
const v3 = 10;
const v4 = Symbol('foo');
const v5 = "def";

const objPrimitives = Object.assign({}, v1, null, v2, undefined, v3, v4); 
// Primitives will be wrapped, null and undefined will be ignored.
// Note, only string wrappers can have own enumerable properties.    <--------------
console.log(objPrimitives);     // { "0": "a", "1": "b", "2": "c" }

// overitten by later in the parameters order
const objPrimitivesAlt = Object.assign({}, v1, null, v2, undefined, v3, v4, v5); 
console.log(objPrimitivesAlt);  // { '0': 'd', '1': 'e', '2': 'f' }


console.log("***  Exceptions interrupt  ***");
// ********************      Exceptions will interrupt the ongoing copying task  ********** //
const targetE = Object.defineProperty({}, 'foo', {
        value: 1,
        writable: false
    }); // target.foo is a read-only property

    Object.assign(targetE, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });
    // TypeError: "foo" is read-only
    // The Exception is thrown when assigning target.foo

    console.log(target.bar);  // 2, the first source was copied successfully.
    console.log(target.foo2); // 3, the first property of the second source was copied successfully.
    console.log(target.foo);  // 1, exception is thrown here.
    console.log(target.foo3); // undefined, assign method has finished, foo3 will not be copied.
    console.log(target.baz);  // undefined, the third source will not be copied either.


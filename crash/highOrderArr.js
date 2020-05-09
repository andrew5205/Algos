const todos = [
    {
        id: 1,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'dentist appt',
        isCompleted: false
    },
]

console.log(todos[1].text);     // meeting with boss



// // For 
// for ( let i = 0; i < 10; i++) {
//     console.log(`For Loop Number: ${i}`);
// }

// // While 
// let i = 0;
// while (i < 10) {
//     console.log(`While Loop Number: ${i}`);
//     i++;
// }



for ( let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

/*
take out trash
meeting with boss
dentist appt
*/


for ( let todo of todos) {
    console.log(todo.text);
}
/*
take out trash
meeting with boss
dentist appt
*/


// forEach , map, filter 

// forEach return just the element
todos.forEach(function(todo) {
    console.log(todo.text);
});


// map create & return a whole array 
const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);  // [ 'take out trash', 'meeting with boss', 'dentist appt' ]


// filter create & return a whole array 
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});
console.log(todoCompleted);

/* 
[
    { id: 1, text: 'take out trash', isCompleted: true },
    { id: 2, text: 'meeting with boss', isCompleted: true }
]
*/


// Filter + Map 
const todoCompletedMap = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
});
console.log(todoCompletedMap);     // [ 'take out trash', 'meeting with boss' ]



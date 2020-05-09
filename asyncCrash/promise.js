
// A promise is an { object } that may produce a single value some time in the future
// either a resolved value, or a reason that it’s not resolved
// A promise may be in one of 3 possible states: { fulfilled }, { rejected }, or { pending }


// Fulfilled: onFulfilled() will be called (e.g., resolve() was called)
// Rejected: onRejected() will be called (e.g., reject() was called)
// Pending: not yet fulfilled or rejected


// most library use promises


// to create your own promise
// ex line #50
// new Promise( (resolve, reject) => {})

// to handle promises 
// .then()  .thenAll()
// .catch

const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'},
];


function getPost() {
    setTimeout( () => {
        let output = '';
        // get post from the array posts 
        posts.forEach( (post) => {
            // looping through & output to output 
            output += `<li>${post.title}</li>`;
        })

        // output to show on the page 
        document.body.innerHTML = output;
    }, 1000);
}


// Fulfilled: onFulfilled() will be called (e.g., resolve() was called)
// Rejected: onRejected() will be called (e.g., reject() was called)
// Pending: not yet fulfilled or rejected

function createPost(post) {
    //  setup a function, that will return a { Promise } object 
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push(post);

            const error = false;
            // const error = true;

            //  error checking 
            if (!error) {
                resolve();
            } else {
                reject('Error: something went wrong');
            }
        }, 2000)
    });
}

// *****************    Async / Await     ******************************************************* //
// must labeled Async if used a weight inside of it 
// a weight just that it waits for an asynchronous process or action complete 
async function init() {
    // init is a async function 
    // wait until createPost() done 
    // then move to proceed getPost()
    await createPost({ title: 'Post Three', body: 'This is post three'});

    getPost();
}
init();



// *****************    Async / Await /Fetch    ******************************************************* //
async function fetchUsers() {
    // fetch out to url 
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // format data into json, store as const data 
    const data = await res.json();

    console.log(data);
}
fetchUsers();






// *****************    Promise    ******************************************************* //
//  promise is set, use .then() .catch()
createPost({ title: 'Post Three', body: 'This is post three'})
.then(getPost)

// .catch() will take whatever passed in reject()
.catch( err => console.log(err));



// Promise.all 
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise( (resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));


// fetch return promise
// needs two .then()
// 1st: format to Json
// 2nd: actual gives yoy the data 
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then( res => res.json());

// res.json() = JSON.stringify() + res.send()

Promise.all([promise1, promise2, promise3, promise4]).then( (val) => console.log(val));





// A callback function is a function passed into another function as an argument, 
// which is then invoked inside the outer function to complete some kind of routine or action.



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


function createPost(post, callbackFunc) {
    setTimeout( () => {
        posts.push(post);
        callbackFunc();
    }, 2000)
}



// getPost();

createPost({ title: 'Post Three', body: 'This is post three'}, getPost);

// ************************************************************ // 








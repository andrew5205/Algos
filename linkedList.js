


// Object & class
// When you create an object and store it in a local var, the system doesn’t put the object in that memory
// slot the way it does for a number or a boolean.

// It puts a reference to that heap location into your local var. 
// References (called pointers) are fixed-size, so this enables the runtime do its stack magic.

// A pointer represents an object’s location in memory, 
// but you can think of it as an object’s contact info: its email address.

// True to its name, a pointer points to where the object is found. If you have information to
// retrieve from (or store to) an object, 
// you “go there” by dereferencing that pointer, followed by the attribute you want within the object.




// Linked list 
// Linked lists provide a way to store a large amount of information without (as arrays do) forcing the
// runtime to find a large contiguous chunk of memory (as arrays do).

// Linked lists introduce the reference concept – essentially, storing the location of the variable, 
// instead of its value.


// If the linked list is empty, then the value of the head is NULL.


// definition of a node Object
function SLNode(val) {
    this.value = val;
    this.next = null;   //a pointer to the next SLNode(with the attributes value and next)
}

function SLL() {
    this.head = null;
}

//  Add Front
SLL.prototype.addToFront = function(val) {
    var newNode = new SLNode(val);
    if(this.head == null) {             // list is empty 
        this.head = newNode;            // newNode assign the pointer as head 
    } else {
        newNode.next = this.head;       // assign current head as the next node of newNode
        this.head = newNode;            // assign newNode as the new head 
    }
    return this;
}


//  Add to the end 
SLL.prototype.addToEnd = function(val) {
    var newNode = new SLNode(val);
    if(this.head == null) {             // list is empty 
        this.head = newNode;            // newNode assign the pointer as head 
    }else{
        var current = this.head;        // runner starting point as head 
        while(current.next != null) {   // if it not the last node
            current=current.next;       // have the runner moving to the next, like i++ 
        }
        current.next=newNode;           // assign newNode linked to the last node
    }
    return this;
}





var myList = new SLL();
myList.addToFront(3).addToFront(8).addToFront(1).addToFront(6).addToFront(4);
console.log(myList);


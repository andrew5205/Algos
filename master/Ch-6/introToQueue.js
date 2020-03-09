

// 1. enqueue(val): add val to Queue
// 2. dequeue(): remove & return front value
// 3. front(): return (not remove) first val
// 4. contains(val): Queue contains val?
// 5. isEmpty(): Queue contains no values?
// 6. size(): return num of vals in Queue


function SLNode(val){
    this.value = val;
    this.next = null;
}
function SLQueue(){
    this.head = null;
    this.tail = null;
}



SLQueue.prototype.enqueue = function(val) {
    var newNode = new SLNode(val);
    if( !this.head ) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.tail.next = newNode;       // link with original this.tail
        this.tail = newNode;            // assign newNode as new tail
    }
    return this;
}


// print Queue
SLQueue.prototype.printQueue = function() {
    if( !this.head ) {
        return "Empty list";
    }
    var current = this.head;
    while( current.next != null ) {
        process.stdout.write(current.value + "->");
        current = current.next;
    }
    console.log(current.value);                     // print out the last node // no need to add "->"
}

var myQueue = new SLQueue();
myQueue.enqueue(2).enqueue(3).enqueue(4);
myQueue.printQueue();


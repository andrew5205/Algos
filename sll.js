
// const n1 = {
//     data: 100
// }

// const n2 = {
//     data: 200
// }

// n1.next = n2;

// console.log(n1);
// console.log(n2);


class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// const n1 = new Node(100);
// console.log(n1);  //--> Node { data: 100, next: null }


class LinkedList {
    constructor() {
        this.head = null;  // empty list 
        this.size = 0;
    }


    // insert first node 
    insertFirst(data) {
        this.head = new Node(data, this.next);
        this.size++;
    }

    // insert last node 

    // insert at index 

    // get at index

    // remove at index 

    // clear list

    // print list data 
    printListData() {
        let current = this.head; 

        while(current) {
            console.log(current.data);
            current = current.next;   // moving to the next, like i++
        }
    }

}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
// ll.insertFirst(300);

console.log(ll);
ll.printListData();



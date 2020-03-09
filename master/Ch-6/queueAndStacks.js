

// It is always wise to borrow great ideas from the past, 
// and over time well-known patterns have emerged for storing, managing and retrieving information. 

// These patterns are reflected in reusable code called data structures.


// As we study data structures, it is important to keep in mind that 
// these data structures could be implemented in a number of ways, 
// using different building blocks underneath. 

// For this reason, data structures such as Queues are considered Abstract Data Types.

// the outward behavior of the data structure is well understood, 
// but there is no requirement on how the data structure is constructed internally.


// FIFO 
// Queues enforce this, as Sequential data structures. 
// Values emerge in order we add them. Like waiting in line at a store, 
// first value to enter is the first to exit (first customer to
// wait in line is the first to get a tasty treat!). 
// For this reason, Queues contain only a few methods:

// 1. enqueue(val): add val to Queue
// 2. dequeue(): remove & return front value
// 3. front(): return (not remove) first val
// 4. contains(val): Queue contains val?
// 5. isEmpty(): Queue contains no values?
// 6. size(): return num of vals in Queue



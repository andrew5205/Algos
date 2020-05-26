
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor() {
        // BST start point root -> null
        this.root = null;
    }

    // insert 
    // 1. chech empty or not 
    //      if empty, root pointer = newNode 
    // 2. set a runner: currentNode = this.root
    // 3. not empty, use while(true) to loop 
            // two option value < or > currentNode
    // 4. within each option, check currentNode has child or not
            // if no child, assign value, and return this
            // if child, move to next level
    // 5. move to the next level (end point for while loop)
    
    insert(value) {
        // create a newNode, so we have a reference to it 
        const newNode = new Node(value);
        if ( this.root == null) {
            this.root = newNode;
        } else {
            // if the root exisit 
            // get another reference point starting at this.root 
            let currentNode = this.root;

            // trick to build tree 
            // dont know exactlly how long we gonna traverse 
            // while(true) means keep moving 
            // make sure having a end point
            while( true ) {
                if ( value < currentNode.value ) {
                    if ( !currentNode.left ) {
                        currentNode.left = newNode;
                        return this;
                    }
                    // if on the left already have a node, move to the next left
                    // also an end point for while loop
                    currentNode = currentNode.left;
                } else {
                    if ( !currentNode.right ) {
                        currentNode.right = newNode;
                        return this;
                    }
                    // if on the right already have a node, move to the next right
                    // also an end point for while loop
                    currentNode = currentNode.right;
                }
            }
        }
    }



    // lookup
    lookup(value) {
        // if root not exist
        if ( !this.root) {
            return false;
        }
        // runner 
        let currentNode = this.root; 

        // three possibl:  >, <, =
        // while runner exist
        while( currentNode ) {
            if ( value < currentNode.value) {
                currentNode = currentNode.left;
            } else if ( value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (currentNode.value == value) {
                return currentNode;
            } 
        }
        return false;
    }
}


const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);


// 
// JSON.stringify(traverse(tree.root));
// console.log(JSON.stringify(traverse(tree.root)));
// console.log(tree);


console.log(tree.lookup(15));
// tree.lookup(7);



//     9
//  4     20
//1  6  15  170

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}


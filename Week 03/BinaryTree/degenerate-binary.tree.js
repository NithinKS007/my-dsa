// A degenerate binary tree (also known as a pathological tree) is a type of binary tree where
// each parent node has only one child. As a result, the tree essentially behaves like a linked list.
// In a degenerate tree, every node only has a left or right child, but never both, making the tree
// degenerate.

// Characteristics of a Degenerate Binary Tree:
// It has the same depth as a linked list, i.e., the number of nodes is equal to the height of the tree.

// There is no branching because each node has only one child (either left or right).

// The height of the tree is equal to the number of nodes minus one.

    // 1
    //  \
    //   2
    //    \
    //     3
    //      \
    //       4
    //        \
    //         5


class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class DegenerateTree {
  constructor() {
    this.root = null;
  }

  // Insert a new node, making sure it's always to the right (degenerating the tree)
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      // Always move to the right child to create a degenerate tree
      while (current.right) {
        current = current.right;
      }
      current.right = newNode;
    }
  }

  // Pre-order traversal of the degenerate tree
  preOrder(node) {
    if (node) {
      console.log(node.value);
      this.preOrder(node.right); // Only traverse the right subtree
    }
  }
}

const tree = new DegenerateTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);

console.log("Pre-order traversal of the degenerate tree:");
tree.preOrder(tree.root);
// The insert method ensures that each new node is added as the 
// right child of the last node in the tree, making the tree degenerate.

// The preOrder method is a recursive function that prints the value of each node in pre-order traversal. 
// Here, we only traverse the right child since the tree is degenerate.


// Insertion: In a degenerate binary tree, each insertion is done at the rightmost node, 
// so the time complexity of each insertion is O(n), where n is the number of nodes already in the tree. 
// This is because the function needs to traverse down to the last node.

// Traversal: The traversal of the degenerate tree is similar to that of a linked list. 
// The time complexity for a pre-order traversal is O(n), where n is the number of nodes.
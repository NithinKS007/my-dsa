class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (root.value > newNode.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  search(root = this.root, value) {
    if (!root) {
      return false;
    }
    if (root.value === value) {
      return true;
    } else if (root.value > value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  preOrder(root = this.root, result = []) {
    if (root) {
      result.push(root.value);
      this.preOrder(root.left, result);
      this.preOrder(root.right, result);
    }
    return result;
  }

  inOrder(root = this.root, result = []) {
    if (root) {
      this.inOrder(root.left, result);
      result.push(root.value);
      this.inOrder(root.right, result);
    }
    return result;
  }

  postOrder(root = this.root, result = []) {
    if (root) {
      this.postOrder(root.left, result);
      this.postOrder(root.right, result);
      result.push(root.value);
    }
    return result;
  }

  bfs() {
    const result = [];
    const queue = [this.root];

    if (this.isEmpty()) {
      return result;
    }

    while (queue.length > 0) {
      const currentNode = queue.shift();
      result.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return result;
  }

  min(root) {
    if (this.isEmpty()) {
      throw new Error("The tree is empty");
    }
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (this.isEmpty()) {
      throw new Error("The tree is empty");
    }
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
  deleteNode(root, value) {
    if (root === null) {
      return root;
    }

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }

      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }

    return root;
  }
  isValidBst(root = this.root, minValue = -Infinity, maxValue = Infinity) {
    if (root === null) {
      return true;
    }

    if (root.value <= minValue || root.value >= maxValue) {
      return false;
    }
    return (
      this.isValidBst(root.left, minValue, root.value) &&
      this.isValidBst(root.right, root.value, maxValue)
    );
  }
  isValidBstManual(root) {
    if (!root) {
      return true;
    }

    const queue = [{ node: root, minValue: -Infinity, maxValue: Infinity }];

    while (queue.length > 0) {
      const { node, minValue, maxValue } = queue.shift();

      if (node.value <= minValue || node.value >= maxValue) {
        return false;
      }

      if (node.left) {
        queue.push({
          node: node.left,
          minValue: minValue,
          maxValue: node.value,
        });
      }

      if (node.right) {
        queue.push({
          node: node.right,
          minValue: node.value,
          maxValue: maxValue,
        });
      }
    }

    return true;
  }

  closestValue(root, target) {
    let closest = root.value;

    while (root) {
      if (Math.abs(root.value - target) < Math.abs(closest - target)) {
        closest = root.value;
      }

      if (target < root.value) {
        root = root.left;
      } else {
        root = root.right;
      }
    }

    return closest;
  }

  height(node = this.root) {
    if (node === null) {
      return -1;
    }

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }
  secLargestBFS() {
    if (this.isEmpty()) return null;

    let largest = -Infinity;
    let secondLargest = -Infinity;
    const queue = [this.root];

    while (queue.length > 0) {
      const currentNode = queue.shift();

      if (currentNode) {
        if (currentNode.value > largest) {
          secondLargest = largest;
          largest = currentNode.value;
        } else if (
          currentNode.value > secondLargest &&
          currentNode.value !== largest
        ) {
          secondLargest = currentNode.value;
        }

        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
    }

    return secondLargest === -Infinity ? null : secondLargest;
  }

  countLeftNodes() {
    if (this.isEmpty()) return 0;

    let count = 0;
    const queue = [this.root];

    while (queue.length > 0) {
      const currentNode = queue.shift();

      if (currentNode.left) {
        count++;
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return count;
  }
  countLeafNodes(root = this.root) {
    if (root === null) {
      return 0;
    }
    if (root.left === null && root.right === null) {
      return 1;
    }
    return this.countLeafNodes(root.left) + this.countLeafNodes(root.right);
  }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
console.log(bst.search(10)); // true
console.log(bst.search(7)); // false
console.log(bst.inOrder()); // [5, 10, 15]
console.log(bst.height()); // 1
console.log(bst.min(bst.root)); // 5
console.log(bst.max(bst.root)); // 15
console.log(bst.closestValue(bst.root, 12)); // 10
// bst.delete(10);
console.log(bst.inOrder()); // [5, 15]

console.log(bst.secLargestBFS());
console.log(bst.countLeafNodes());

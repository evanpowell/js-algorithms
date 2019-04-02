class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let side = '';

    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    for (let currentNode = this.root; currentNode.val !== val; currentNode = currentNode[side]) {
      side = val > currentNode.val ? 'right' : 'left';

      if (!currentNode[side]) {
        currentNode[side] = new Node(val);
        return this;
      }
    }

    return undefined;
  }

  find(val) {
    let side = '';

    for (let currentNode = this.root; currentNode !== null; currentNode = currentNode[side]) {
      if (val === currentNode.val) {
        return true;
      }

      side = val > currentNode.val ? 'right' : 'left';
    }

    return false;
  }

  depthFirstSearchInOrder() {
    if (!this.root) {
      return [];
    }

    const visitedValues = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      visitedValues.push(node.val);
      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);

    return visitedValues;
  }
}

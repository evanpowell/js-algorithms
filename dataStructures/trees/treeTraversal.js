class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  dequeue() {
    if (this.length === 0) {
      return undefined;
    }

    let dequeuedNodeVal = this.head.val;

    if (this.length === 1) {
      this.head = null;
      this.tail = null; 
    } else {
      this.head = this.head.next;
    }

    this.length--;

    return dequeuedNodeVal;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(val) {
    const newNode = new Node(val);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (!this.top) {
      return undefined;
    }

    const poppedNodeVal = this.top.val;
    this.top = this.top.next;

    return poppedNodeVal;
  }
}

class TreeNode {
  constructor(val) {
    this.val = val;
    this.children = [];
  }

  insert(val) {
    this.children.push(new TreeNode(val));
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  breadthFirstSearch() {
    if (!this.root) {
      return [];
    }
    const visitedValues = [];
    const nodeQueue = new Queue();
    nodeQueue.enqueue(this.root);
    let currentNode;

    while (nodeQueue.length) {
      currentNode = nodeQueue.dequeue();
      visitedValues.push(currentNode.val);

      for (let child of currentNode.children) {
        nodeQueue.enqueue(child);
      }
    }

    return visitedValues;
  }

  depthFirstSearchPreOrder() {
    if(!this.root) {
      return [];
    }

    const visitedValues = [];
    const stack = new Stack();
    let top;
    let child;
    
    stack.push(
      {
        node: this.root,
        isVisited: false,
        currentIndex: 0
      }
    );

    while (stack.top) {
      top = stack.top.val;
      if (!top.isVisited) {
        visitedValues.push(top.node.val);
        top.isVisited = true;
      }

      child = top.node.children[top.currentIndex];

      if (child) {
        top.currentIndex++;
        stack.push({
          node: child,
          isVisited: false,
          currentIndex: 0
        });
      } else {
        stack.pop();
      }
    }

    return visitedValues;
  }
}
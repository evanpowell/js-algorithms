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
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;  
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    return ++this.size;
  }

  dequeue() {
    if (this.size === 0) {
      return undefined;
    }

    const dequeuedNode = this.head;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = dequeuedNode.next;
      dequeuedNode.next = null;
    }

    this.size--;
    return dequeuedNode.val;
  }
}
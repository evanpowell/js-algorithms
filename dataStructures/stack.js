class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.size = 0;
    this.top = null;
  }

  add(val) {
    const newNode = new Node(val);
    const temp = this.top;
    this.top = newNode;
    this.top.next = temp;

    return ++this.size;
  }

  remove() {
    if (this.top === null) {
      return undefined;
    }

    const removedNode = this.top;
    this.top = removedNode.next;
    removedNode.next = null;

    this.size--;

    return removedNode.val;
  }
}

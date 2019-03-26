class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return;
    } 
    const returnNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;
  
      while (currentNode.next !== this.tail) {
        currentNode = currentNode.next;
      }
  
      currentNode.next = null;
      this.tail = currentNode;

    }

    this.length--;

    return returnNode;
  }

  shift() {
    if (this.length === 0) {
      return;
    }

    const returnNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.length--;

    return returnNode;
    
  }

  unshift(val) {
    const node = new Node(val);

    node.next = this.head;

    this.head = node;

    if (this.length === 0) {
      this.tail = node;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let i = 0;
    let currentNode = this.head;

    while (i !== index) {
      currentNode = currentNode.next;
      i++;
    }

    return currentNode;
  }

  set(index, val) {
    const foundNode = this.get(index);

    if (!foundNode) {
      return false;
    }

    foundNode.val = val;
    
    return true;
  }

  insert(index, val) {
    if (index === 0) {
      this.unshift(val);
      return true;
    }

    if (index === this.length) {
      this.push(val);
      return true;
    }

    const previousNode = this.get(index - 1);

    if (!previousNode) {
      return false;
    }

    const newNode = new Node(val);

    newNode.next = previousNode.next;
    previousNode.next = newNode;
    
    length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    const previousNode = this.get(index - 1);
    const removedNode = previousNode.next;
    previousNode.next = removedNode.next;

    return removedNode;
  }

  reverse() {
    const temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let currentNode = this.tail;
    let nextNode;
    let prevNode = null;

    while(currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    return this;

  }
}
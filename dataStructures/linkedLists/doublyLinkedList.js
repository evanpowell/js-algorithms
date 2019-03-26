class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    const removedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      removedNode.prev = null;
      this.tail.next = null;
    }
    
    this.length--;
    
    return removedNode;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }

    const removedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      removedNode.next = null;
      this.head.prev = null;
    }

    this.length--;

    return removedNode;
  }

  unshift(val) {
    const newNode = new Node(val);
    
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let currentNode = this.head;
    let property = 'next';
    let currentIndex = 0;
    let incrementDecrement = 1;

    if (index > this.length / 2) {
      currentNode = this.tail;
      property = 'prev';
      currentIndex = this.length - 1;
      incrementDecrement = -1;
    }

    while (currentIndex !== index) {
      currentNode = currentNode[property];
      currentIndex += incrementDecrement;
    }

    return currentNode;
  }

  set(index, val) {
    const node = this.get(index);
    if (node !== null) {
      node.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      this.unshift(val);
      return true;
    }

    if (index === this.length) {
      this.push(val);
      return true;
    }
    
    const prevNode = this.get(index - 1);

    const newNode = new Node(val);

    newNode.prev = prevNode;
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    newNode.next.prev = newNode;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    const removedNode = this.get(index);

    removedNode.next.prev = removedNode.prev;
    removedNode.prev.next = removedNode.next;
    removedNode.next = null;
    removedNode.prev = null;

    this.length--;

    return removedNode;
  }

  reverse() {
    if (this.length < 2) {
      return this;
    }

    
    let currentNode = this.head;
    let temp;
    while (currentNode !== null) {
      temp = currentNode.next;
      currentNode.next = currentNode.prev;
      currentNode.prev = temp;
      currentNode = temp;
    }

    temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    return this;
  }
}
// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst (data) {
    var node = new Node(data, this.head);
    this.head = node;
  }

  size() {
    var count = 0;
    var node = this.head;

    while (node) {
      node = node.next;
      count++;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    var node = this.head;

    while (node) {
      if (node.next === null) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    var previous = this.head;
    var node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    var last = this.getLast();
    last.next = new Node(data);
  }

  getAt(integer) {
    var count = 0;
    if (!this.head) {
      return null;
    }
    var node = this.head;
    while (node) {
      if (count === integer) {
        return node;
      }
      node = node.next;
      count ++;
    }
  }

  forEach(fn) {
    if (!this.head) {
      return;
    }
    var node = this.head;
    var index = 0;
    while (node) {
      fn(node, index);
      node = node.next;
      index++;
    }
  }

}


module.exports = { Node, LinkedList };

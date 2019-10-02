class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  printList() {
    let array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return console.log(array, this.length);
  }
  prepend(value) {
    const newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;

    this.head = newNode;
    this.length++;
    return this.printList();
  }
  append(value) {
    const newNode = new Node(value);

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    // return this.printList();
  }
  travelToIndex(index) {
    let counter = 0;
    let currentNode;
    if (index <= this.length - index) {
      currentNode = this.head;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
    } else {
      currentNode = this.tail;
      while (counter !== this.length - index - 1) {
        currentNode = currentNode.prev;
        counter++;
      }
    }
    return currentNode;
  }
  insert(index, value) {
    if (index == 0) {
      return this.prepend(value);
    }
    if (index >= this.length) {
      return this.append(value);
    }
    let newNode = new Node(value);
    const leader = this.travelToIndex(index - 1);
    newNode.next = leader.next;
    newNode.prev = leader;
    leader.next = newNode;
    newNode.next.prev = newNode;
    this.length++;
    return this.printList();
  }
  delete(index) {
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return this.printList;
    }
    if (index == 0) {
      let p = this.head.next;
      p.prev = null;
      this.head = p;
      this.length--;
      return this.printList();
    }
    if (index >= this.length - 1) {
      let p = this.tail.prev;
      p.next = null;
      this.tail = p;

      this.length--;
      return this.printList();
    }
    const leader = this.travelToIndex(index - 1);
    const follower = leader.next.next;
    leader.next = follower;
    follower.prev = leader;
    this.length--;
    return this.printList();
  }
}
let myLinkedList = new DoublyLinkedList(12);
myLinkedList.append(2);

myLinkedList.prepend(56);
myLinkedList.prepend(5);
myLinkedList.insert(2, 6);
myLinkedList.delete(0);
myLinkedList.delete(4);
myLinkedList.delete(1);
myLinkedList.delete(1);
myLinkedList.delete(0);

// myLinkedList.printList();

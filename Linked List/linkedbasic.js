// const basket=['apple','mango','pear'];
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    // console.log(this);
  }

  prepend2(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    // console.log(this);
  }
  printList() {
    let array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return console.log(array);
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    let newNode = new Node(value);
    // console.log(this.head);
    const leader = this.traverseToIndex(index - 1);

    const after = leader.next;
    newNode.next = after;
    leader.next = newNode;
    this.length++;
    // return this.printList();
  }

  remove(index) {
    if (index == 0) {
      let p = this.head;
      let r = p.next;

      this.head = r;
      return this.printList();
    }
    const leader = this.traverseToIndex(index - 1);
    const del = leader.next;
    leader.next = del.next;
    this.length--;
    // delete del;
    return this.printList();
  }
  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

let MyLinkedList = new LinkedList(10);
MyLinkedList.append(2);
MyLinkedList.append(9);
MyLinkedList.prepend2(1);
MyLinkedList.insert(3, 45);
MyLinkedList.insert(90, 90);
MyLinkedList.printList();
MyLinkedList.remove(5);
MyLinkedList.reverse();

// console.log(MyLinkedList.prepend(22));

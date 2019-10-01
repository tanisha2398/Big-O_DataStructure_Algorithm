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
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    let newNode = new Node(value);
    // console.log(this.head);
    let p = this.head;
    for (let i = 1; i < index - 1; i++) {
      p = p.next;
    }
    let r = p.next;
    newNode.next = r;
    p.next = newNode;
    this.length++;
    // console.log(newNode);
  }
}

let MyLinkedList = new LinkedList(10);
MyLinkedList.append(2);
MyLinkedList.append(9);
MyLinkedList.prepend2(1);
MyLinkedList.insert(3, 45);
MyLinkedList.insert(90, 90);
MyLinkedList.printList();
// console.log(MyLinkedList.prepend(22));

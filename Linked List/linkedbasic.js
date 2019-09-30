// const basket=['apple','mango','pear'];
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
    let p = this.tail;

    p.next = {
      value: value,
      next: null
    };

    this.tail = p.next;
    this.length += 1;
    console.log(this.tail, this.length);
  }
  prepend(value) {
    let p = this.head;
    this.head = {
      value: value,
      next: p
    };
    this.length += 1;
    console.log(this.head, this.length);
  }
}

let MyLinkedList = new LinkedList(10);
console.log(MyLinkedList.append(2));
console.log(MyLinkedList.prepend(22));

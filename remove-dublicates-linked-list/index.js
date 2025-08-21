class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  removeDuplicates() {
    const values = new Set();
    let previous = null;
    let current = this.head;
    while (current !== null) {
      if (values.has(current.value)) {
        previous.next = current.next;
        this.length -= 1;
      } else {
        values.add(current.value);
        previous = current;
      }
      current = current.next;
    }
  }

  reverseBetween(m, n) {
    if (this.head === null) return null;

    const dummy = new Node(0);
    dummy.next = this.head;
    let prev = dummy;

    for (let i = 0; i < m; i++) {
      prev = prev.next;
    }

    let current = prev.next;
    for (let i = 0; i < n - m; i++) {
      let temp = current.next;
      current.next = temp.next;
      temp.next = prev.next;
      prev.next = temp;
    }

    this.head = dummy.next;
  }

  swapPairs() {
    if (!this.head || !this.head.next) return;

    let dummy = new Node(0, this.head);
    let first = dummy;
    let current = this.head;

    while (current && current.next) {
      let next = current.next.next;
      let second = current.next;

      second.next = current;
      current.next = next;
      first.next = second;

      first = current;
      current = next;
    }

    this.head = dummy.next;
  }

  removeNode(val) {
        let dummy = new Node(0 , this.head);
        let p = dummy;

         while (p.next) {
        if (p.next.val === val) {
            p.next = p.next.next; // skip the node
        } else {
            p = p.next; // move forward
        }
    }

        this.head = dummy.next;
        return this.head;
    }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(6);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(6);

console.log("Original list:");
myLinkedList.printList();
console.log("----------------");
myLinkedList.removeNode(6);
console.log("\nList after removing a val:");
myLinkedList.printList();


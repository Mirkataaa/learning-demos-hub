class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(val) {
        const newNode = new Node(val);
        this.head = newNode;
        // this.tail = this.head;
        this.length = 1;
    }

     printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.val);
      temp = temp.next;
    }
  }

    push(val) {
    const newNode = new Node(val);
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

   removeNode(val) {
        let dummy = new Node(0);
        dummy.next = this.head
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
let myLinkedList = new LinkedList(7);
myLinkedList.push(7);
myLinkedList.push(7);
myLinkedList.push(7);

console.log("Original list:");
myLinkedList.printList();
console.log("----------------");
myLinkedList.removeNode(7);
console.log("\nList after removing a val:");
myLinkedList.printList();

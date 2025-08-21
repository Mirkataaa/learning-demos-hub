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
        this.tail = this.head;
        this.length = 1;
    }

    printList () {
    let temp = this.head;
    while(temp) {
        console.log(temp.val);
        temp = temp.next;
        }
    }

    // push in linked list

    push(val) {
        const newNode = new Node(val);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        // empty list return undefined 
        if(!this.head) return undefined;

        // keep track of the current and prev node
        let temp = this.head;
        let pre = this.head;

        while(temp.next) {
            pre = temp;
            temp = temp.next;
        }

        this.tail = pre;
        this.tail.next = null;
        this.length--;

        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return temp;
    }

    unshift(val) {
        const newNode = new Node(val);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let prev = null;

        for(let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

        return this;
    }

    reverse2() {
        let temp = this.head;
        let prev = null;

        while(temp) {
            let next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

        return prev;
    }
}



let myLinkedList = new LinkedList(4);

myLinkedList.push(5);
myLinkedList.push(6);
myLinkedList.push(7);
// myLinkedList.printList();
// myLinkedList.pop();
// myLinkedList.printList();
// myLinkedList.unshift(2);
// myLinkedList.printList();
// myLinkedList.reverse()
// console.log('hui')
// myLinkedList.printList();
// myLinkedList.reverse2([1,2,3,4,5])
console.log(myLinkedList.reverse2([1,2,3,4,5]));

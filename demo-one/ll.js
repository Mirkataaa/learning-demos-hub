
printList () {
    let temp = this.head;
    while (temp !== null) {
        console.log(temp.value);
        temp = temp.next;
    }
}

getHead () {
    if(this.head === null) {
        console.log("Head: null");
    } else {
        console.log("Head: " + this.head.value);
    }
}

getTail() {
    if (this.head === null) {
        console.log("Tail: null");
    } else {
        console.log("Tail: " + this.tail.value);
    }
}

getLength() {
    console.log("Length: " + this.length);
}


// myLinkedList.getHead();
// myLinkedList.getTail();
// myLinkedList.getLength();
// console.log("\nLinked List:");
// myLinkedList.printList();

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Reverse the linked list
  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
  }

  // Find the second largest number
  findSecondLargest() {
    let firstMax = -Infinity;
    let secondMax = -Infinity;

    let curr = this.head;

    while (curr !== null) {
      if (curr.data > firstMax) {
        secondMax = firstMax;
        firstMax = curr.data;
      } else if (curr.data > secondMax && curr.data < firstMax) {
        secondMax = curr.data;
      }

      curr = curr.next;
    }

    return secondMax;
  }
}

const linkedList = new LinkedList();

const list = [20, 10, 30, 40, 70];
for (const num of list) {
  linkedList.addNode(num);
}

linkedList.reverse();

const secondLargest = linkedList.findSecondLargest();

console.log("Reversed Linked List:", linkedList);
console.log("Second Largest Number:", secondLargest);

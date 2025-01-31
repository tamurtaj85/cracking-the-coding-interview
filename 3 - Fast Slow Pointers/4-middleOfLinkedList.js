/**
 * Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.

If the total number of nodes in the LinkedList is even, return the second middle node.
 */

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function middleOfList(head) {
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.val;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log('middle of the list is: ', middleOfList(head));

head.next.next.next.next.next = new Node(6);

console.log('middle of the list is: ', middleOfList(head));

head.next.next.next.next.next.next = new Node(7);

console.log('middle of the list is: ', middleOfList(head));

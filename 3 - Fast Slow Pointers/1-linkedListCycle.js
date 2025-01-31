/**
 * Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.
 */

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function hasCycle(head) {
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      console.log('cycle length is: ', getCycleLength(slow));
      return true;
    }
  }

  return false;
}

function getCycleLength(slow) {
  let curr = slow,
    length = 1;

  while (true) {
    curr = curr.next;
    length += 1;

    if (curr === slow) return length;
  }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

console.log('list has cycle? ', hasCycle(head));

head.next.next.next.next.next = head.next.next;

console.log('list has cycle? ', hasCycle(head));

head.next.next.next.next.next = head.next.next.next;

console.log('list has cycle? ', hasCycle(head));

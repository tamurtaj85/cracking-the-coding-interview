/**
 * Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.
 */

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
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

function hasCycle(head) {
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return {cycleExists: true, length: getCycleLength(slow)};
    }
  }

  return {cycleExists: false, length: 0};
}

function getCycleStart(head) {
  const {length, cycleExists} = hasCycle(head);

  if (!cycleExists) return null;

  let slow = head,
    fast = head,
    cycleLength = length - 1;

  // move the fast pointer to N nodes ahead as we know the cycle length
  while (cycleLength > 0) {
    fast = fast.next;
    cycleLength -= 1;
  }

  // now loop over to find out the start
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow.val;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

console.log('cycle start is: ', getCycleStart(head));

head.next.next.next.next.next = head.next.next;

console.log('cycle start is: ', getCycleStart(head));

head.next.next.next.next.next = head.next.next.next;

console.log('cycle start is: ', getCycleStart(head));

head.next.next.next.next.next = head;

console.log('cycle start is: ', getCycleStart(head));

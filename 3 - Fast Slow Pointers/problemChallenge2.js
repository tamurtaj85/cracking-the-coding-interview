/**
 *Rearrange a LinkedList (medium) #
Given the head of a Singly LinkedList, write a method to modify the LinkedList such that the nodes from the second half of the LinkedList are inserted alternately to the nodes from the first half in reverse order. So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.

Your algorithm should not use any extra space and the input LinkedList should be modified in-place.
 */

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }

  printList() {
    let result = [];
    let head = this;

    while (head) {
      result.push(head.val);
      head = head.next;
    }

    console.log(result.join(' -> '));
  }
}

function alternateReverseList(head) {
  let slow = head,
    fast = head;

  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let secondHalf = reverseList(slow);
  let firstHalf = head;

  while (firstHalf && secondHalf) {
    let temp1 = firstHalf.next;
    let temp2 = secondHalf.next;

    firstHalf.next = secondHalf;
    secondHalf.next = temp1;

    firstHalf = temp1;
    secondHalf = temp2;
  }
}

function reverseList(head) {
  let prev = null,
    curr = head;

  while (curr) {
    let next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next;
  }

  return prev;
}

// Helper function to create LinkedList from array
function createLinkedList(arr) {
  if (!arr.length) return null;

  let head = new Node(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }

  return head;
}

const head1 = createLinkedList([2, 4, 6, 8, 10, 12]);
const head2 = createLinkedList([1, 8, 4, 2, 6, 10, 50, 24, 12]);
const head3 = createLinkedList([2, 4, 6, 8, 10]);

console.log('alternate reversed list is: ');
alternateReverseList(head1);
head1.printList();

console.log('alternate reversed list is: ');
alternateReverseList(head2);
head2.printList();

console.log('alternate reversed list is: ');
alternateReverseList(head3);
head3.printList();

/**
 * Reverse a sub-list
 *
 * Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  printList() {
    const res = [];
    let curr = this;

    while (curr) {
      res.push(curr.val);
      curr = curr.next;
    }

    console.log(res.join(' -> '));
  }
}

function createList(arr) {
  if (!arr.length) return null;

  const head = new Node(arr[0]);
  let curr = head;

  for (let i = 1; i < arr.length; i++) {
    curr.next = new Node(arr[i]);
    curr = curr.next;
  }

  return head;
}

function reverseSubList(head, p, q) {
  if (p == q) return head;

  let current = head,
    previous = null,
    i = 0;

  while (current && i < p - 1) {
    previous = current;
    current = current.next;
    i++;
  }

  // as lastNodeOfFirstPart is the initial part before before the sub list required for reverse
  const lastNodeOfFirstPart = previous;
  // currently this will be the remaining part of the list containing the starting node of sub-list
  // but current will be used to reverse the list till upper limit
  // after the reverse it will be last node in reversed sub-list
  const lastNodeOfSubList = current;

  let next = null;
  i = 0;

  while (current && i < q - p + 1) {
    next = current.next;
    current.next = previous;

    previous = current;
    current = next;
    i++;
  }

  // connect the last node of the first part with the reversed list
  if (lastNodeOfFirstPart) lastNodeOfFirstPart.next = previous;
  else head = previous;

  lastNodeOfSubList.next = current;

  return head;
}

const head = createList([1, 2, 3, 4, 5]);
const p = 2,
  q = 4;

console.log('given the list');
head.printList();
console.log('and range: p = ', p, ' q = ', q);
console.log('following is the reversed list');
reverseSubList(head, p, q).printList();

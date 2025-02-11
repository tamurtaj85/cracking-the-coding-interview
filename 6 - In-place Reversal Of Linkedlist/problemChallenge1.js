/**
 * Reverse alternating K-element Sub-list (medium)
 *
 * Given the head of a LinkedList and a number ‘k’, reverse every alternating ‘k’ sized sub-list starting from the head.

If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  printList() {
    const res = [];
    let current = this;

    while (current) {
      res.push(current.val);
      current = current.next;
    }

    console.log(res.join(' -> '));
  }
}

function reverseAlternatingKSubList(head, k) {
  let current = head,
    previous = null,
    i = 0;

  while (true) {
    const lastNodeOfPreviousPart = previous;
    const lastNodeOfSubList = current;
    i = 0;

    // reversing
    while (current && i < k) {
      const next = current.next;
      current.next = previous;

      previous = current;
      current = next;
      i++;
    }

    if (lastNodeOfPreviousPart) lastNodeOfPreviousPart.next = previous;
    else head = previous;

    lastNodeOfSubList.next = current;

    i = 0;

    // traversing
    while (current && i < k) {
      previous = current;
      current = current.next;

      i++;
    }

    if (!current) break;
  }

  return head;
}

function createList(arr) {
  if (!arr.length) return null;

  const head = new Node(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }

  return head;
}

const head = createList([1, 2, 3, 4, 5, 6, 7, 8]);

head.printList();
console.log('give the list');
console.log('the alternate reversed k sub list is:');
reverseAlternatingKSubList(head, 2).printList();

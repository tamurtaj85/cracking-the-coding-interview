/**
 * Reverse every K-element Sub-list (medium)
 *
 * Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.

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

function reverseKGroup(head, k) {
  let current = head,
    previous = null;

  while (true) {
    const lastNodeOfPerviousList = previous;
    const lastNodeOfSubList = current;

    console.log({lastNodeOfPerviousList, lastNodeOfSubList});

    let next = null,
      i = 0;

    while (current && i < k) {
      next = current.next;
      current.next = previous;

      previous = current;
      current = next;
      i++;
    }

    if (lastNodeOfPerviousList) lastNodeOfPerviousList.next = previous;
    else head = previous;

    lastNodeOfSubList.next = current;

    if (!current) break;

    previous = lastNodeOfSubList;
  }

  return head;
}

function getListLength(head) {
  let current = head,
    length = 0;

  while (current) {
    length++;
    current = current.next;
  }

  return length;
}

const head = createList([1, 2, 3, 4, 5, 6, 7, 8]);
const k = 3;

head.printList();
console.log('for given list. Reversed list of every interval of k: ', k, ' is');
reverseKGroup(head, k).printList();

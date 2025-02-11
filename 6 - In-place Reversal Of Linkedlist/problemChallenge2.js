/**
 * Rotate a LinkedList (medium)
 *
 * Given the head of a Singly LinkedList and a number ‘k’, rotate the LinkedList to the right by ‘k’ nodes.
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

function rotateListByKNodes(head, rotations) {
  let first = head,
    last = head,
    i = 0,
    n = 1; // we already have a node assigned so n=1

  // get the length as well as the last node of list
  while (last.next) {
    last = last.next;
    n++;
  }

  // make the list circular so that we don't have to worry about linking later
  last.next = head;

  // if k is greater than the list length,
  // only rotate remaining part to avoid redundant cycles
  rotations %= n;
  const actualRotations = n - rotations;

  // start rotating the list from the start and then where loop finished set the next to null to make it last node of rotated list
  while (i < actualRotations - 1) {
    first = first.next;

    i++;
  }

  head = first.next;
  first.next = null;

  return head;
}

function getListSize(head) {
  let current = head,
    i = 0;

  while (current) {
    current = current.next;
    i++;
  }

  return i;
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

const list1 = createList([1, 2, 3, 4, 5, 6]);
const k1 = 3;

list1.printList();
console.log('given the list with ', k1, ' rotations ');
console.log('the rotated list is as following');

rotateListByKNodes(list1, k1).printList();

console.log();

const list2 = createList([1, 2, 3, 4, 5]);
const k2 = 8;

list2.printList();
console.log('given the list with ', k2, ' rotations ');
console.log('the rotated list is as following');

rotateListByKNodes(list2, k2).printList();

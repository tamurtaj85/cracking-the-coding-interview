/**
 * Reverse a LinkedList (easy)
 * Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.
 */
class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
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

function reverseLinkedList(head) {
  let prev = null,
    curr = head;

  while (curr) {
    // next stores the rest of linked list
    const next = curr.next;
    // link of the current node gets updated with last linked lists
    curr.next = prev;

    // updating the prev with reversed nodes
    prev = curr;
    // and update the curr with remaining of the originally left linked list
    curr = next;
  }

  return prev;
}

const head = createLinkedList([2, 4, 6, 8, 10]);

head.printList(),
  console.log(
    'given the linked list above,',
    '\nthe reverse linked list is as follows: '
  );
reverseLinkedList(head).printList();

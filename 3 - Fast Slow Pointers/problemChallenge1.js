/**
 *
 * Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.

Your algorithm should use constant space and the input LinkedList should be in the original form once the algorithm is finished. The algorithm should have O(N) time complexity where ‘N’ is the number of nodes in the LinkedList.
 */

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function isListPalindrome(head) {
  let slow = head,
    fast = head;

  if (!head || !head.next) return true;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // as our pointer is already in the middle reverse the next half of list
  let reversedSecondHalf = reverseList(slow);
  // copy the second half so that it will be reversed again in original order
  const copiedReversedHalf = reversedSecondHalf;

  // now we have 2 heads, the og one head and head2 = reversedSecondHalf
  while (head && reversedSecondHalf) {
    if (head.val !== reversedSecondHalf.val) {
      break;
    }

    head = head.next;
    reversedSecondHalf = reversedSecondHalf.next;
  }

  reverseList(copiedReversedHalf);

  return head === reversedSecondHalf;
}

function reverseList(head) {
  let prev = null,
    next = null;

  while (head) {
    // temporarily save the next node
    next = head.next;
    // for first node next will be null for rest it will be previously saved node
    head.next = prev;
    // keep on updating the prev in reverse order
    prev = head;
    // update the head with the temporarily saved node (unmodified list)
    head = next;
  }

  return prev;
}

const list1 = new Node(2);
list1.next = new Node(4);
list1.next.next = new Node(6);
list1.next.next.next = new Node(4);
list1.next.next.next.next = new Node(2);

console.log('is list palindrome? ', isListPalindrome(list1));

const list2 = new Node(2);
list2.next = new Node(4);
list2.next.next = new Node(6);
list2.next.next.next = new Node(4);
list2.next.next.next.next = new Node(2);
list2.next.next.next.next.next = new Node(2);

console.log('is list palindrome? ', isListPalindrome(list2));

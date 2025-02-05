/**
 * Minimum Meeting Rooms (hard) #
 * Given a list of intervals representing the start and end time of ‘N’ meetings, find the minimum number of rooms required to hold all the meetings.
 */
import Heap from 'collections/heap.js';

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  getInterval() {
    return [this.start, this.end];
  }
}

function printInterval(intervals) {
  const res = [];

  for (const interval of intervals) {
    res.push(interval.getInterval());
  }

  return res;
}

function minMeetingRooms(meetingIntervals) {
  meetingIntervals.sort((a, b) => a.start - b.start);

  let minRooms = 0,
    minHeap = new Heap([], null, (a, b) => b.end - a.end);

  for (let i = 0; i < meetingIntervals.length; i++) {
    const interval = meetingIntervals[i];

    while (minHeap.length > 0 && interval.start >= minHeap.peek().end) {
      minHeap.pop();
    }

    minHeap.push(interval);
    minRooms = Math.max(minRooms, minHeap.length);
  }

  return minRooms;
}

const testCases = [
  [new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)],
  [new Interval(6, 7), new Interval(2, 4), new Interval(8, 12)],
  [new Interval(1, 4), new Interval(2, 3), new Interval(3, 6)],
  [
    new Interval(4, 5),
    new Interval(2, 3),
    new Interval(2, 4),
    new Interval(3, 5),
  ],
];

for (const test of testCases) {
  console.log(
    'for given schedules:',
    printInterval(test),
    '\nfollowing number of rooms will be required: ',
    minMeetingRooms(test),
    '\n'
  );
}

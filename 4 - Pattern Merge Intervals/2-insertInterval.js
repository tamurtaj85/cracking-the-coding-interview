/**
 *Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.
 */

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  getInterval() {
    return [this.start, this.end];
  }
}

function insertInterval(intervals, newInterval) {
  const mergedIntervals = [];

  let {start, end} = newInterval;

  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];

    // keep on adding the intervals those are smaller than new
    if (interval.end < start) {
      mergedIntervals.push(interval);
      continue;
    } else if (interval.start <= end) {
      // compare and update the overlapping intervals
      start = Math.min(start, interval.start);
      end = Math.max(end, interval.end);
    } else {
      // when there are no further overlaps insert the intervals, and reset them with current interval
      // push the previously saved/overlapped interval
      mergedIntervals.push(new Interval(start, end));

      start = interval.start;
      end = interval.end;
    }
  }

  mergedIntervals.push(new Interval(start, end));

  return mergedIntervals;
}

const interval1 = [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)];
const interval2 = [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)];
const interval3 = [new Interval(2, 3), new Interval(5, 7)];

const printIntervals = (intervals) => {
  const res = [];

  intervals.forEach((interval) => {
    res.push(interval.getInterval());
  });

  console.log(res);
};

console.log('intervals after insertion:');
printIntervals(insertInterval(interval1, new Interval(4, 6)));

console.log('intervals after insertion:');
printIntervals(insertInterval(interval2, new Interval(4, 10)));

console.log('intervals after insertion:');
printIntervals(insertInterval(interval3, new Interval(1, 4)));

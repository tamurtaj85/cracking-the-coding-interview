/**
 * (Medium)
 * Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.
 */

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  getInterval() {
    return `[${this.start}, ${this.end}]`;
  }
}

function mergeIntervals(intervals) {
  if (intervals.length < 2) return intervals;

  intervals.sort((a, b) => a.start - b.start);

  const mergedIntervals = [];
  let {start, end} = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];

    // if the start of interval is less than the existing intervals end, i.e. its overlapping
    if (interval.start <= end) {
      // if overlapping update the end with greater end
      end = Math.max(end, interval.end);
    } else {
      // non-overlapping interval, push the previous interval to the merged array and update the start and end with current interval
      mergedIntervals.push(new Interval(start, end));

      start = interval.start;
      end = interval.end;
    }
  }

  mergedIntervals.push(new Interval(start, end));

  return mergedIntervals;
}

const interval1 = [new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)];

const interval2 = [new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)];

const interval3 = [new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)];

function printIntervals(intervals) {
  const res = [];

  intervals.forEach((interval) => {
    res.push(interval.getInterval());
  });

  console.log(res);
}

console.log('merged intervals are: ');
printIntervals(mergeIntervals(interval1));

console.log('merged intervals are: ');
printIntervals(mergeIntervals(interval2));

console.log('merged intervals are: ');
printIntervals(mergeIntervals(interval3));

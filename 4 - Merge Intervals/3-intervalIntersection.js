/**
 *
 * Intervals Intersection (medium)
 * Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.
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

function getIntervalIntersections(intervalsA, intervalsB) {
  const intersections = [];

  let iA = 0,
    iB = 0;

  while (iA < intervalsA.length && iB < intervalsB.length) {
    const intervalA = intervalsA[iA];
    const intervalB = intervalsB[iB];

    // as we have 2 different intervals, we need to iterate over both of them
    // and check which one is overlapping the other a <> b or b <> a
    const aOverlapsB =
      intervalB.start <= intervalA.end && intervalA.start <= intervalB.start;

    const bOverlapsA =
      intervalA.start <= intervalB.end && intervalB.start <= intervalA.start;

    // console.log({aOverlapsB, bOverlapsA, intervalA, intervalB});

    if (aOverlapsB || bOverlapsA) {
      // as we are looking a intersection, start will be the max and end will be the min of the 2 intervals
      let start = Math.max(intervalA.start, intervalB.start),
        end = Math.min(intervalA.end, intervalB.end);

      intersections.push(new Interval(start, end));
    }

    // at the end based on the ending point decide what to do with increment
    if (intervalA.end === intervalB.end) {
      // when both ends at the common point move both of them to next interval
      iA++, iB++;
    } else if (intervalA.end < intervalB.end) iA++;
    else iB++;
  }

  return intersections;
}

function printInterval(intervals) {
  const res = [];

  for (const interval of intervals) {
    res.push(interval.getInterval());
  }

  return res;
}

const testCases = [
  [
    [new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)],
    [new Interval(2, 3), new Interval(5, 7)],
  ],
  [
    [new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)],
    [new Interval(5, 10)],
  ],
];

for (const test of testCases) {
  console.log(
    'Intersections of the given intervals:',
    '\ninterval1:',
    printInterval(test[0]),
    '\ninterval2:',
    printInterval(test[1]),
    '\nis: ',
    printInterval(getIntervalIntersections(test[0], test[1])),
    '\n'
  );
}

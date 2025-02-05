/**
 * Conflicting Appointments (medium)
 *
 * Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.
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

function canAttendAllAppointments(intervals) {
  intervals.sort((a, b) => a.start - b.start);

  let {start, end} = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];

    if (interval.start <= end) {
      return false;
    } else {
      start = interval.start;
      end = interval.end;
    }
  }

  return true;
}

function printInterval(intervals) {
  const res = [];

  for (const interval of intervals) {
    res.push(interval.getInterval());
  }

  return res;
}

const testCases = [
  [new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)],
  [new Interval(6, 7), new Interval(2, 4), new Interval(8, 12)],
  [new Interval(4, 5), new Interval(2, 3), new Interval(3, 6)],
];

for (const test of testCases) {
  console.log(
    'for given intervals: ',
    printInterval(test),
    '\ncan user attend all the meetings?? ',
    canAttendAllAppointments(test),
    '\n'
  );
}

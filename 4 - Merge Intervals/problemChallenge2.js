/**
 * Maximum CPU Load (hard) #
 * 
We are given a list of Jobs. Each job has a Start time, an End time, and a CPU load when it is running. Our goal is to find the maximum CPU load at any time if all the jobs are running on the same machine.
 */

class Job {
  constructor(start, end, load) {
    this.start = start;
    this.end = end;
    this.load = load;
  }

  getJob() {
    return [this.start, this.end, this.load];
  }
}

function printJobs(jobs) {
  const res = [];

  jobs.forEach((job) => {
    res.push(job.getJob());
  });

  return res;
}

function maxCpuLoad(jobs) {
  jobs.sort((a, b) => a.start - b.start);

  let {start, end, load} = jobs[0];

  for (let i = 1; i < jobs.length; i++) {
    const job = jobs[i];

    if (job.start <= end) {
      end = Math.max(job.end, end);
      load += job.load;
    } else {
      start = job.start;
      end = job.end;
      load = Math.max(load, job.load);
    }
  }

  return load;
}

const testCases = [
  [new Job(1, 4, 3), new Job(2, 5, 4), new Job(7, 9, 6)],
  [new Job(6, 7, 10), new Job(2, 4, 11), new Job(8, 12, 15)],
  [new Job(1, 4, 2), new Job(2, 4, 1), new Job(3, 6, 5)],
];

testCases.forEach((test) => {
  console.log(
    'for given jobs:',
    printJobs(test),
    '\nthe maximum cpu load is: ',
    maxCpuLoad(test),
    '\n'
  );
});

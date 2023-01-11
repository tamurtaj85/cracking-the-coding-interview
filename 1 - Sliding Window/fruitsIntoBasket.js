/**
 * Fruits into Baskets (medium)
 */

/**
 * Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

You can start with any tree, but once you have started you can’t skip a tree. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both the baskets.
 */

const fruitTrees = [
  ['A', 'B', 'C', 'A', 'C'],
  ['A', 'B', 'C', 'B', 'B', 'C'],
];

const baskets = 2;

function maximumFruits(fruitTreesArray, nBaskets) {
  const fruitsTreeMap = new Map();

  let maximumFruitCount = 0,
    windowStart = 0;

  for (let treeIndex = 0; treeIndex < fruitTreesArray.length; treeIndex++) {
    const fruitTree = fruitTreesArray[treeIndex];

    if (fruitsTreeMap.has(fruitTree)) {
      let treeCount = fruitsTreeMap.get(fruitTree);
      fruitsTreeMap.set(fruitTree, ++treeCount);
    } else fruitsTreeMap.set(fruitTree, 1);

    while (fruitsTreeMap.size > nBaskets) {
      const treeToBeSkipped = fruitTreesArray[windowStart];

      let treeCount = fruitsTreeMap.get(treeToBeSkipped);

      fruitsTreeMap.set(treeToBeSkipped, --treeCount);

      if (treeCount === 0) fruitsTreeMap.delete(treeToBeSkipped);

      windowStart++;
    }

    maximumFruitCount = Math.max(
      maximumFruitCount,
      treeIndex - windowStart + 1
    );
  }

  return maximumFruitCount;
}

for (let index = 0; index < fruitTrees.length; index++) {
  console.log(
    `Maximum fruits count for fruit trees [${fruitTrees[index]}] with ${baskets} baskets is: `,
    maximumFruits(fruitTrees[index], baskets)
  );
}

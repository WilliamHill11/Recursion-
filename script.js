// Warmup: Fibonacci

const fibs = (n) => {
  const arr = [0, 1];
  if (n <= 0)
    return 'Please enter a valid number of elements to be given an answer.';
  if (n === 1) return [0];
  if (n === 2) return arr;
  for (let i = 2; i < n; i++)
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  return arr;
};

console.log(fibs(-2)); // returns "Please enter a valid number of elements to be given an answer."
console.log(fibs(1)); // returns [0]
console.log(fibs(2)); // returns [0, 1]
console.log(fibs(3)); // returns [0, 1, 1]
console.log(fibs(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]

// Fibonacci Recursion
const fibsRecurse = (n) => {
  return n <= 0
    ? 'Please enter a valid number of elements to be given an answer.'
    : n === 1
    ? [0]
    : n === 2
    ? [0, 1]
    : [
        ...fibsRecurse(n - 1),
        fibsRecurse(n - 1)[n - 2] + fibsRecurse(n - 1)[n - 3],
      ];
};

/* One-liner cos Tim said so. Your fault, Tim. */

console.log(fibsRecurse(-2)); // returns "Please enter a valid number of elements to be given an answer."
console.log(fibsRecurse(1)); // returns [0]
console.log(fibsRecurse(2)); // returns [0, 1]
console.log(fibsRecurse(3)); // returns [0, 1, 1]
console.log(fibsRecurse(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]

const mergeSortRec = (arr) => {
  if (arr.length === 0) return 'Please provide a non empty array!';
  if (arr.length === 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);

  return merge(mergeSortRec(left), mergeSortRec(right));
};

const merge = (leftArr, rightArr) => {
  //To merge the both incoming arrays
  const result = [];

  let iL = 0;
  let iR = 0;

  while (iL < leftArr.length && iR < rightArr.length) {
    if (leftArr[iL] < rightArr[iR]) {
      result.push(leftArr[iL]);
      iL++;
    } else {
      result.push(rightArr[iR]);
      iR++;
    }
  }

  while (iL < leftArr.length) {
    result.push(leftArr[iL]);
    iL++;
  }

  while (iR < rightArr.length) {
    result.push(rightArr[iR]);
    iR++;
  }

  return result;
};

console.log(mergeSortRec([])); // []
console.log(mergeSortRec([10, 7, 8, 9, 1, 5])); // [1, 5, 7, 8, 9, 10]
console.log(mergeSortRec([30, 20, 10, 50, 22, 33, 55])); //[10, 20, 22, 30, 33, 50, 55]

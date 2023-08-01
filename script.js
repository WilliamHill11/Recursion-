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

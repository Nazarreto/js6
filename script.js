// Task 1

// const fibonacci = (n) => {
//   let fib = [1, 1];
//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   console.log(fib.join(", "));
// };

// fibonacci(5);

// fibonacci(10);

// task 2

// спосіб 1

// const geometricSum = function (n, q) {
//   let sum = 0;
//   let current = 1;
//   for (let i = 1; i <= n; i++) {
//     sum += current;
//     current *= q;
//   }
//   return sum;
// };

// console.log(geometricSum(5, 2));

// спосіб 2

// const geometricSum = function (n, q) {
//   return (1 * (1 - Math.pow(q, n))) / (1 - q);
// };

// console.log(geometricSum(4, 3));

// task 3

// const isPrime = function (num) {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num !== 1;
// };

// const showPrimes = function (start, end) {
//   for (let i = start; i <= end; i++) {
//     if (isPrime(i)) {
//       console.log(i);
//     }
//   }
// };

// const start = parseInt(prompt("Enter the starting number"));
// const end = parseInt(prompt("Enter the ending number"));
// showPrimes(start, end);

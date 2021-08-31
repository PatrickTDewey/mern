/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-extend-native */
/* eslint-disable no-plusplus */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-unused-vars */
const { BlockList } = require('net');
const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 4;
Number.prototype.isPrime = function () {
  for (let i = 2; i <= Math.sqrt(this); i++) {
    if (this % i === 0) {
      return false;
    }
  }
  return true;
}

while (primeCount < 1e4) {
  if (num.isPrime()) {
    primeCount++;
  }
  num++;
}

console.log(`The 10,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

// Number.prototype.isSievePrime = function () {
//     if (this < 1) {
//         return false;
//     }
//     var bools = [...Array((this.valueOf())).fill(true)]
//     for (let i = 2; i < Math.sqrt(this); i++) {
//         if (bools[i] == true) {
//             for (let j = i**2; j < this; (j**2 + i)) {
//                 bools[j] = false;
//             }
//         }
//     }
//     return bools
// }
// console.log(num.isSievePrime());
// bools = num.isSievePrime();
// console.log(bools[0]);

// recursive
// function rFib(n) {
//     if (n < 2) {
//         return n;
//     }
//     return rFib(n - 1) + rFib(n - 2);
// }
// console.log(`This took ${performance.now() - start} milliseconds to run ${rFib(30)} rfib`);

// iterative
// function iFib(n) {
//     const vals = [0, 1];
//     while (vals.length - 1 < n) {
//         let len = vals.length;
//         vals.push(vals[len - 1] + vals[len - 2]);
//     }
//     return vals[n];
// }
// console.log(`This took ${performance.now() - start} milliseconds to run ${iFib(50)} ifib`);

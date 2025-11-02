const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = [];
  const nStr = n.toString();
  for(let i = 0; i < nStr.length; i++) {
    let newN = nStr.slice(0,i) + nStr.slice(i + 1);
    arr.push(Number(newN));
  }
  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};

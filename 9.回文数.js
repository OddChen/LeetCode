/**
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 例如，121 是回文，而 123 不是。
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let arr = x.toString().split('')
  let n = arr.length
  if (n === 1) {
    return true
  }
  if (x < 0) {
    return false
  }
  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (arr[i] !== arr[n - 1 - i]) {
      return false
    }
  }
  return true
}
// 官方解法
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false
  }
  let revnum = 0
  while (x > revnum) {
    revnum = revnum * 10 + (x % 10)
    x = (x / 10) | 0
  }
  return revnum === x || ((revnum / 10) | 0) === x
}

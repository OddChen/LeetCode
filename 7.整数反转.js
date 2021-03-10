/**
 * 给你一个 32 位的有符号整数 x ，返回 x 中每位上的数字反转后的结果。
 * 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let sign = Math.sign(x)
  let result = Math.abs(x).toString().split('').reverse().join('') * sign
  if (result < -Math.pow(2, 31) || result > Math.pow(2, 31) - 1) {
    return 0
  }
  return result
}
// 自己写的解法
var reverse = function (x) {
  let arr = x.toString().split('')
  let flag = 1
  if (!Number(arr[0])) {
    arr.shift()
    flag = -1
  }
  let result = Number(arr.reverse().join('')) * flag
  if (result < -Math.pow(2, 31) || result > Math.pow(2, 31) - 1) {
    return 0
  }
  return result
}
/**
 *  JavaScript的位运算以32二进制执行，进行位运算时，先将数值转换成32位有符号整数，取整就去除了小数部分了
 *  x % 10 会保留正负号
 * */

var reverse = function (x) {
  let result = 0
  while (x !== 0) {
    result = result * 10 + (x % 10)
    x = (x / 10) | 0
  }
  return (result | 0) === result ? result : 0
}

/**
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let len = digits.length
  let flag = 0
  digits[len - 1] += 1
  for (let i = len - 1; i >= 0; i--) {
    let cur = digits[i] + flag
    //console.log(cur, digits[i], flag)
    if (cur >= 10) {
      digits[i] = cur % 10
      flag = 1
    } else {
      digits[i] = cur
      flag = 0
    }
  }
  if (flag) {
    digits.unshift(1)
  }
  return digits
}
//用了BigInt，效率其实不是很高
var plusOne = function (digits) {
  return String(BigInt(digits.join('')) + 1n).split('')
}

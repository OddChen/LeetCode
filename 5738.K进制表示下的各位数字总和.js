/**
 * 给你一个整数 n（10 进制）和一个基数 k ，
 * 请你将 n 从 10 进制表示转换为 k 进制表示，
 * 计算并返回转换后各位数字的总和。
 * 转换后，各位数字应当视作是 10 进制数字，
 * 且它们的总和也应当按 10 进制表示返回。
 *
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
  let knum = n.toString(k)
  let sum = 0
  for (let values of knum) {
    sum += Number(values)
  }
  return sum
}

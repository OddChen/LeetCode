/**
 * 颠倒给定的 32 位无符号整数的二进制位。
 * 提示：
 * 请注意，在某些语言（如 Java）中，没有无符号整数类型。
 * 在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。
 * 在 Java 中，编译器使用二进制补码记法来表示有符号整数。
 * 因此，在上面的 示例 2 中，输入表示有符号整数 -3，输出表示有符号整数 -1073741825。
 * 进阶:
 * 如果多次调用这个函数，你将如何优化你的算法？
 *
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
//自己写的
var reverseBits = function (n) {
  let result = n.toString(2).split('').reverse().join('')
  while (result.length < 32) {
    result += '0'
  }
  return parseInt(result, 2)
}
//官方思路的解法
var reverseBits = function (n) {
  let result = 0
  for (let i = 0; i < 32; i++) {
    result = (result << 1) + (n & 1)
    n = n >>> 1
  }
  return result >>> 0
}

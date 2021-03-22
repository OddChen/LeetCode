/**
 * 编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为汉明重量）。
 * 提示：
 * 请注意，在某些语言（如 Java）中，没有无符号整数类型。
 * 在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。
 * 在 Java 中，编译器使用二进制补码记法来表示有符号整数。因此，在上面的 示例 3 中，输入表示有符号整数 -3。

 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  n = n.toString(2)
  let count = n.replace(/0/g, '')
  //console.log(count)
  return count.length
}

var hammingWeight = function (n) {
  let count = 0
  while (n) {
    n = n & (n - 1)
    count++
  }
  return count
}

var hammingWeight = function (n) {
  let count = 0
  for (let i = 0; i < 32; i++) {
    if ((n & (1 << i)) !== 0) {
      count++
    }
  }
  return count
}

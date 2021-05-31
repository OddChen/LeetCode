/**
 * 两个整数之间的 汉明距离 指的是这两个数字对应二进制位不同的位置的数目。
 * 给你两个整数 x 和 y，计算并返回它们之间的汉明距离。
 *
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
//异或后求1的数量
var hammingDistance = function (x, y) {
  let z = x ^ y
  // console.log(z)
  let result = 0
  while (z != 0) {
    result += z & 1
    z >>= 1
  }
  return result
}

//应用到 Brian Kernighan 算法，z & (z - 1)的结果删掉了z中最右边的一个1
var hammingDistance = function (x, y) {
  let z = x ^ y
  // console.log(z)
  let result = 0
  while (z) {
    z &= z - 1
    result++
  }
  return result
}

//别人的解，用了js的库函数，但是效率一般
var hammingDistance = function (x, y) {
  return Array.from((x ^ y).toString(2), Number).reduce((a, c) => a + c, 0)
}

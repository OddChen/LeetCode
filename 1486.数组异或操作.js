/**
 * 给你两个整数，n 和 start 。
 * 数组 nums 定义为：nums[i] = start + 2*i（下标从 0 开始）且 n == nums.length 。
 * 请返回 nums 中所有元素按位异或（XOR）后得到的结果。
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  let nums = []
  for (let i = 0; i < n; i++) {
    nums[i] = start + 2 * i
  }
  return nums.reduce((x, y) => {
    return x ^ y
  })
  // let result = 0;
  // for(let i = 0; i < n ; i++){
  //     result^= start + 2*i;
  // }
  // return result;
}

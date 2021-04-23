/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * nums	2	4	7	8	9	12	16	20
 *  dp	1	2	1	3	1	 3	 4	 3
 * 一维的dp，dp用于统计到当前数值为止的最大长度，
 * 单独保存最大的长度和当前满足条件的最大值
 * maxlen = 4, maxval = 16
 * 从后往前重新遍历数组，查找到dp[i]和最大长度一致的数
 * 一开始maxlen = 4,查找dp[i] = 4的数->16
 * 16可以被整除，将16加入到结果数组中，
 * maxlen--, maxval = nums[i](16)
 * 接着找到了8和12，但是只有8满足maxval % nums[i] === 0
 * 将8加入到结果数组中，maxlen--, maxval = 8
 * 依次计算
 */
var largestDivisibleSubset = function (nums) {
  nums.sort((x, y) => x - y)
  let n = nums.length
  let dp = new Array(n + 1).fill(1)
  let maxlen = 1
  let maxval = nums[0]
  //计算每个位置符合要求的子集长度
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    if (dp[i] > maxlen) {
      maxval = nums[i]
      maxlen = dp[i]
    }
  }
  //有了结果数组的长度和当前最大值，就可以开始算结果数组了
  let result = []
  if (maxlen === 1) {
    result.push(maxval)
    return result
  }
  for (let i = n - 1; i >= 0 && maxlen > 0; i--) {
    if (dp[i] === maxlen && maxval % nums[i] === 0) {
      result.push(nums[i])
      maxval = nums[i]
      maxlen--
    }
  }
  return result
}

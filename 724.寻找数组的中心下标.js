/**
 * 给你一个整数数组 nums，请编写一个能够返回数组 “中心下标” 的方法。
 * 数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。
 * 如果数组不存在中心下标，返回 -1 。
 * 如果数组有多个中心下标，应该返回最靠近左边的那一个。
 * 注意：中心下标可能出现在数组的两端。
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const total = nums.reduce((a, b) => {
    return a + b
  })
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    if (2 * sum + nums[i] === total) {
      return i
    }
    sum = sum + nums[i]
  }
  return -1
}

// 自己写的 两次循环 还用了额外的空间==
var pivotIndex = function (nums) {
  let leftsum = [0]
  let len = nums.length
  if (len === 0) {
    return -1
  }
  for (let i = 0; i < len; i++) {
    leftsum[i + 1] = leftsum[i] + nums[i]
  }
  //console.log(leftsum)
  for (let i = 0; i < len; i++) {
    if (leftsum[i] === leftsum[len] - leftsum[i + 1]) {
      return i
    }
  }
  return -1
}

/**
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 用时超98%
var removeElement = function (nums, val) {
  let n = nums.length
  let i = 0
  while (i < n) {
    if (nums[i] === val) {
      nums[i] = nums[n - 1]
      n--
    } else {
      i++
    }
  }
  return n
}

// 第一次写的，差别不是很大
var removeElement = function (nums, val) {
  let i = nums.indexOf(val)
  let n = nums.length
  if (i >= 0) {
    while (i < n) {
      if (nums[i] === val) {
        nums.splice(i, 1)
        n--
      } else {
        i++
      }
      //console.log(i, nums.length, nums)
    }
    return n
  }
  return n
}

// 内存超94%
var removeElement = function (nums, val) {
  let n = nums.length
  for (let i = 0; i < n; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      i--
      n--
    }
  }
  return n
}

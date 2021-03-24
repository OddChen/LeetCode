/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let n = nums.length
  let curmax = 0
  let max = nums[0]
  for (let i = 0; i < nums.length; i++) {
    curmax = Math.max(curmax + nums[i], nums[i])
    if (max < curmax) {
      max = curmax
    }
  }
  return max
}
// 官方写法
var maxSubArray = function (nums) {
  let max = nums[0]
  let pre = 0
  nums.forEach((val) => {
    pre = Math.max(pre + val, val)
    max = Math.max(pre, max)
  })
  return max
}

//官方的另一种解法，线段树
function Status(l, r, m, i) {
  this.lSum = l
  this.rSum = r
  this.mSum = m
  this.iSum = i
}

const pushUp = (l, r) => {
  const iSum = l.iSum + r.iSum
  const lSum = Math.max(l.lSum, l.iSum + r.lSum)
  const rSum = Math.max(r.rSum, r.iSum + l.rSum)
  const mSum = Math.max(Math.max(l.mSum, r.mSum), l.rSum + r.lSum)
  return new Status(lSum, rSum, mSum, iSum)
}

const getInfo = (a, l, r) => {
  if (l === r) {
    return new Status(a[l], a[l], a[l], a[l])
  }
  const m = (l + r) >> 1
  const lSub = getInfo(a, l, m)
  const rSub = getInfo(a, m + 1, r)
  return pushUp(lSub, rSub)
}

var maxSubArray = function (nums) {
  return getInfo(nums, 0, nums.length - 1).mSum
}

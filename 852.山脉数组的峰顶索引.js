/**
 * 符合下列属性的数组 arr 称为 山脉数组 ：
 * arr.length >= 3
 * 存在 i（0 < i < arr.length - 1）使得：
 * arr[0] < arr[1] < ... arr[i-1] < arr[i]
 * arr[i] > arr[i+1] > ... > arr[arr.length - 1]
 * 给你由整数组成的山脉数组 arr ，
 * 返回任何满足 arr[0] < arr[1] <...arr[i - 1] < arr[i] > arr[i + 1] >...> arr[arr.length - 1]的下标i。
 *
 * 进阶：很容易想到时间复杂度 O(n) 的解决方案，你可以设计一个 O(log(n)) 的解决方案吗？
 * @param {number[]} arr
 * @return {number}
 */
//二分
var peakIndexInMountainArray = function (arr) {
  const len = arr.length
  let low = 0
  let high = len - 1
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    // console.log(mid)
    //max在右边
    if (arr[mid] <= arr[mid + 1]) {
      low = mid + 1
    }
    //max在左边
    else {
      high = mid - 1
    }
  }
  return low
}
//直接遍历，O(n)
var peakIndexInMountainArray = function (arr) {
  const len = arr.length
  for (let i = 0; i < len - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return i
    }
  }
}

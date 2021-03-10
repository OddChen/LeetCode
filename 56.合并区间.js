/**
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
 * 请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
 * @param {number[][]} intervals
 * @return {number[][]}
 */
//先排序后比较
//写的比较乱== 还能再调整一下
var merge = function (intervals) {
  intervals.sort((a, b) => {
    return a[0] - b[0]
  })
  let result = [intervals[0]]
  let len = intervals.length
  for (let i = 0; i < len - 1; i++) {
    let rlen = result.length - 1
    if (result[rlen][1] >= intervals[i + 1][0]) {
      result[rlen][1] = Math.max(result[rlen][1], intervals[i + 1][1])
    } else {
      result.push(intervals[i + 1])
    }
  }
  return result
}

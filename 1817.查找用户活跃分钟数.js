/**
 * 给你用户在 LeetCode 的操作日志，和一个整数 k 。日志用一个二维整数数组logs表示，其中每个logs[i] = [IDi, timei] 表示ID为IDi的用户在timei分钟时执行了某个操作。
 * 多个用户 可以同时执行操作，单个用户可以在同一分钟内执行多个操作 。
 * 指定用户的 用户活跃分钟数（user active minutes，UAM） 定义为用户对 LeetCode 执行操作的 唯一分钟数 。
 * 即使一分钟内执行多个操作，也只能按一分钟计数。
 * 请你统计用户活跃分钟数的分布情况，统计结果是一个长度为k且下标从1开始计数的数组answer，对于每个j（1 <= j <= k），answer[j]表示用户活跃分钟数等于j的用户数。
 * 返回上面描述的答案数组 answer 。
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
  let answer = new Array(k).fill(0)
  let usermap = new Map()
  logs.sort((a, b) => a - b)
  for (let i = logs.length - 1; i >= 0; i--) {
    //用户操作次数
    if (!usermap.has(logs[i][0])) {
      let times = []
      times.push(logs[i][1])
      usermap.set(logs[i][0], times)
      //console.log(usermap)
    } else {
      let times = usermap.get(logs[i][0])
      //console.log(times)
      if (!times.includes(logs[i][1])) {
        times.push(logs[i][1])
        usermap.set(logs[i][0], times)
      }
    }
  }
  for (let value of usermap.values()) {
    let times = value.length - 1
    answer[times]++
  }
  return answer
}

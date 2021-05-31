/**
 *
 * 有一个正整数数组 arr，现给你一个对应的查询数组 queries，其中 queries[i] = [Li, Ri]。
 * 对于每个查询 i，请你计算从 Li 到 Ri 的 XOR 值（即 arr[Li] xor arr[Li+1] xor ... xor arr[Ri]）作为本次查询的结果。
 * 并返回一个包含给定查询 queries 所有结果的数组。
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
  //前缀和
  let xorsum = [0]
  for (let i = 0; i < arr.length; i++) {
    let cur = xorsum[i] ^ arr[i]
    // console.log(cur)
    xorsum.push(cur)
  }
  // console.log(xorsum)
  let result = []
  let len = queries.length
  for (let i = 0; i < len; i++) {
    // console.log(xorsum[queries[i][1]],queries[i][1],xorsum[queries[i][0]],queries[i][0])
    let cur = xorsum[queries[i][1] + 1] ^ xorsum[queries[i][0]]
    // console.log(cur)
    result.push(cur)
  }
  return result
}

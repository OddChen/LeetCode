/**
 * 给你单链表的头节点 head 和两个整数 left 和 right ，其中 left <= right 。
 * 请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// 自己写的
const reverseList = (prev, after, length) => {
  //  prev -> 1  after -> 5
  let rprev = after
  let i = 0
  while (i < length) {
    const cur = prev.next.next
    prev.next.next = rprev
    rprev = prev.next
    prev.next = cur
    i++
    //console.log(i, prev, rprev)
  }
  prev.next.next = rprev
  //console.log(prev)
  return prev
}
var reverseBetween = function (head, left, right) {
  let count = 0
  let cur = new ListNode(-1, head)
  let prev = null
  let after = null
  if (left === right) {
    return head
  }
  while (count < left) {
    prev = cur
    cur = cur.next
    count++
  }
  //console.log(count, prev.next.next)
  while (count <= right) {
    cur = cur.next
    count++
  }
  after = cur
  //console.log(count, after)
  let length = right - left
  reverseList(prev, after, length)
  if (prev.val !== -1) {
    return head
  } else {
    return prev.next
  }
}

// 官方的优化方法
var reverseBetween = function (head, left, right) {
  let newlist = new ListNode()
  newlist.next = head
  let pre = newlist
  let i = 1
  while (i < left) {
    pre = pre.next
    i++
  }
  //console.log(i, pre)
  let cur = pre.next
  while (i < right) {
    const next = cur.next
    cur.next = next.next
    next.next = pre.next
    pre.next = next
    i++
    //console.log(pre)
  }
  return newlist.next
}

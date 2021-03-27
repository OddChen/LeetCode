/**
 * 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) {
    return head
  }
  let cur = head
  let stack = [head.val]
  while (cur && cur.next) {
    cur = cur.next
    stack.push(cur.val)
  }
  cur.next = head
  let index = stack.length - (k % stack.length)
  //console.log(stack, index)
  for (let i = 0; i < index; i++) {
    cur = cur.next
  }
  let result = cur.next
  cur.next = null
  return result
}

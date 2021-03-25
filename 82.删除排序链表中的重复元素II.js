/**
 * 存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除链表中所有存在数字重复情况的节点，只保留原始链表中 没有重复出现 的数字。
 * 返回同样按升序排列的结果链表。
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) {
    return head
  }
  let left = new ListNode(-1, head)
  let right = head
  let cur = left
  while (right && right.next) {
    right = right.next
    if (cur.next.val === right.val) {
      while (right && cur.next.val === right.val) {
        right = right.next
      }
      cur.next = right
    } else {
      cur.next.next = right
      cur = cur.next
    }
  }
  return left.next
}
